import authenticationService from "../services/authentication-service";
import { Request, Response } from "express";
import httpStatus from "http-status";

export async function singInPost(req: Request, res: Response) {
  const { name, email, password } = req.body;

  try {
    const result = await authenticationService.signIn(name, email, password);

    return res.status(httpStatus.OK).send(result);
  } catch (error) {
    console.log(error);
    return res.status(httpStatus.UNAUTHORIZED).send(error);
  }
}
