import express from "express";
import cors from "cors";

import movieRoutes from "./routes/movieRoutes.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use(movieRoutes);
 
const APP= process.env.PORT || 3000

app.listen( APP, () => {
  console.log(`Server running on http://localhost:${APP}`);
});