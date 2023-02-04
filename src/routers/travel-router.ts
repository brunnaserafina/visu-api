import { Router } from "express";

import { getTravel, getTravels } from "@/controllers/travel-controller";
import { authenticateToken } from "@/middlewares/authentication-middleware";

const travelsRouter = Router();

travelsRouter.all("/*", authenticateToken).get("/", getTravels).get("/:travelId", getTravel);

export { travelsRouter };
