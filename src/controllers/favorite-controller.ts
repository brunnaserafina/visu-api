import { AuthenticatedRequest } from "@/middlewares/authentication-middleware";
import { getAllFavoritesByUserId, getFavorite, postFavoriteByTravelId, removeFavoriteByTravelId } from "@/services/favorite-service";
import { Response } from "express";
import httpStatus from "http-status";

export async function postFavorite(req: AuthenticatedRequest, res: Response) {
  const { userId } = req;
  const { travelId } = req.params;

  try {
    await postFavoriteByTravelId(userId, Number(travelId));

    return res.sendStatus(httpStatus.CREATED);
  } catch (error) {
    console.log(error);
    return res.status(httpStatus.BAD_REQUEST).send(error);
  }
}

export async function deleteFavorite(req: AuthenticatedRequest, res: Response) {
  const { userId } = req;
  const { travelId } = req.params;

  try {
    await removeFavoriteByTravelId(userId, Number(travelId));
    return res.sendStatus(httpStatus.OK);
  } catch (error) {
    console.log(error);
    return res.status(httpStatus.BAD_REQUEST).send(error);
  }
}

export async function getAllFavorites(req: AuthenticatedRequest, res: Response) {
  const { userId } = req;

  try {
    const allFavorites = await getAllFavoritesByUserId(userId);

    return res.status(httpStatus.OK).send(allFavorites);
  } catch (error) {
    console.log(error);
    return res.status(httpStatus.BAD_REQUEST).send(error);
  }
}

export async function getExistingFavorite(req: AuthenticatedRequest, res: Response) {
  const { userId } = req;
  const { travelId } = req.params;

  try {
    const existingFavorite = await getFavorite(userId, Number(travelId));

    return res.status(httpStatus.OK).send([existingFavorite]);
  } catch (error) {
    console.log(error);
    return res.status(httpStatus.BAD_REQUEST).send(error);
  }
}
