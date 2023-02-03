import { NextFunction, Request, Response } from "express";
import { prisma } from "@/config";
import { unauthorizedError } from "../errors/unauthorized-error";
import httpStatus from "http-status";

export async function authenticateToken(req: AuthenticatedRequest, res: Response, next: NextFunction) {
  const authHeader = req.header("Authorization");
  if (!authHeader) return generateUnauthorizedResponse(res);

  const token = authHeader.split(" ")[1];
  if (!token) return generateUnauthorizedResponse(res);

  try {
    const session = await prisma.sessions.findFirst({
      where: {
        token,
      },
    });

    if (!session) return generateUnauthorizedResponse(res);

    req.userId = session.user_id;

    return next();
  } catch (err) {
    return generateUnauthorizedResponse(res);
  }
}

function generateUnauthorizedResponse(res: Response) {
  res.status(httpStatus.UNAUTHORIZED).send(unauthorizedError());
}

export type AuthenticatedRequest = Request & JWTPayload;

type JWTPayload = {
  userId: number;
};
