import express from "express";

import { movieCreate,moviegetbyParams,movieFilter,movieToken} from "../controllers/movieController.js";

const router = express.Router();

router.post("/api/movies", movieCreate);
router.get("/api/movies/:id", moviegetbyParams);
router.get("/api/movies/filter", movieFilter);
router.get("/api/movies/token", movieToken);


export default router;
//http://localhost:3000/api/movies
//http://localhost:3000/api/movies/10001
//http://localhost:3000/api/movies?movieCat=action
//http://localhost:3000/api/movies/token