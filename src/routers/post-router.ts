import { Router } from "express";
import { authenticateToken } from "@/middlewares/authentication-middleware";
import { postTravel } from "@/controllers/post-controller";
import { validateBody } from "@/middlewares/validation-middleware";
import { PostTravelSchema } from "@/schemas/post-schemas";

const postTravelRouter = Router();

postTravelRouter.all("/*", authenticateToken).post("/", validateBody(PostTravelSchema), postTravel);

export { postTravelRouter };
