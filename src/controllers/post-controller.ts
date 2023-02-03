import { AuthenticatedRequest } from "@/middlewares/authentication-middleware";
import { Response } from "express";
import { PostTravelParams } from "@/schemas/post-schemas";
import {
  getAllTravels,
  newAccommodation,
  newAttractions,
  newPicture,
  newPost,
  newRestaurants,
} from "@/services/post-service";
import httpStatus from "http-status";

export async function postTravel(req: AuthenticatedRequest, res: Response) {
  const { userId } = req;
  const {
    cityOrigin,
    cityDestination,
    dateStart,
    dateEnd,
    spent,
    summary,
    avaliation,
    attractions,
    restaurants,
    accommodation,
    picture,
  } = req.body as PostTravelParams;

  try {
    const travel = await newPost(userId, cityOrigin, cityDestination, dateStart, dateEnd, spent, summary, avaliation);

    await newAttractions(travel.id, attractions);
    await newRestaurants(travel.id, restaurants);
    await newAccommodation(travel.id, accommodation);
    await newPicture(travel.id, picture);

    return res.status(httpStatus.CREATED).send();
  } catch (error) {
    console.log(error);
    return res.status(httpStatus.BAD_REQUEST).send(error);
  }
}

export async function getTravels(req: AuthenticatedRequest, res: Response) {
  const { userId } = req;

  try {
    const travels = await getAllTravels();

    return res.status(httpStatus.OK).send(travels);
  } catch (error) {
    console.log(error);
    return res.status(httpStatus.BAD_REQUEST).send(error);
  }
}
