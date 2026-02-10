//1.app.mjs

import express from "express";
import {moviesRouter} from "./routes/movies.mjs";
import {middlewareCors} from "./middlewares/cors.mjs";
const app = express();

app.use(express.json());

app.disable("x-Powered-by");

app.use(middlewareCors);

app.use("/movies", moviesRouter);

const PORT = process.env.PORT ?? 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});
