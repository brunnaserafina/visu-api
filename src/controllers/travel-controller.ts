import { AuthenticatedRequest } from "@/middlewares/authentication-middleware";
import { Response } from "express";
import httpStatus from "http-status";

import { getAllTravels, getTravelById } from "@/services/travel-service";

export async function getTravel(req: AuthenticatedRequest, res: Response) {
  const { travelId } = req.params;

  try {
    const travel = await getTravelById(Number(travelId));
    return res.status(httpStatus.OK).send([travel]);
  } catch (error) {
    console.log(error);
    return res.status(httpStatus.NOT_FOUND).send(error);
  }
}

export async function getTravels(_req: AuthenticatedRequest, res: Response) {
  try {
    const travels = await getAllTravels();

    return res.status(httpStatus.OK).send(travels);
  } catch (error) {
    console.log(error);
    return res.status(httpStatus.NOT_FOUND).send(error);
  }
}
