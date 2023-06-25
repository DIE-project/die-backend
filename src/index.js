import express from "express";
import morgan from "morgan";
import { PORT } from "./config.js";
import pagesRoutes from "./routes/pages.routes.js";

const app = express();

app.use(morgan("dev"));
app.use(pagesRoutes);

app.listen(PORT);

console.log("Die backend listening on port", PORT);
