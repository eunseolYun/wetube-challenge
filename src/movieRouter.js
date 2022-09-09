import express from "express";
import { home, movieDetail, addNew } from "./movieController";

const movieRouter = express.Router();

movieRouter.get("/", home);
movieRouter.route("/add").get(addNew).post(addNew);
movieRouter.get("/:id", movieDetail);
// create the '/' route
// create the /:id route
// create the /add route (GET + POST)

export default movieRouter;
