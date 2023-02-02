import { singInPost } from "../controllers/authentication-controller";

import { Router } from "express";

const authenticationRouter = Router();

authenticationRouter.post("/sign-in", singInPost);

export { authenticationRouter };
