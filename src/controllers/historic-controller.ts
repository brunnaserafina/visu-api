import { AuthenticatedRequest } from "@/middlewares/authentication-middleware";
import { Response } from "express";
import httpStatus from "http-status";

import { getHistoricByUserId } from "@/services/historic-service";

export async function getUserHistoricTravels(req: AuthenticatedRequest, res: Response) {
  const { userId } = req;

  try {
    const historicUser = await getHistoricByUserId(userId);
    return res.status(httpStatus.OK).send(historicUser);
  } catch (error) {
    console.log(error);
    return res.status(httpStatus.BAD_REQUEST).send(error);
  }
}
