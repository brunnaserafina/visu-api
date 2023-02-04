import { getUserHistoricTravels } from "@/controllers/historic-controller";
import { authenticateToken } from "@/middlewares/authentication-middleware";
import { Router } from "express";

const historicRouter = Router();

historicRouter.all("/*", authenticateToken).get("/", getUserHistoricTravels);

export { historicRouter };
