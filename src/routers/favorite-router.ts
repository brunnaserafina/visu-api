import { Router } from "express";
import { authenticateToken } from "@/middlewares/authentication-middleware";
import { deleteFavorite, getAllFavorites, postFavorite } from "@/controllers/favorite-controller";

const favoriteRouter = Router();

favoriteRouter
  .all("/*", authenticateToken)
  .post("/:travelId", postFavorite)
  .delete("/:travelId", deleteFavorite)
  .get("/", getAllFavorites);

export { favoriteRouter };
