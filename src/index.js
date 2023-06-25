import express from "express";
import morgan from "morgan";
import { PORT } from "./config.js";
import db from "./config/database.js";
import Inscription from "./models/Inscription.js";
import pagesRoutes from "./routes/pages.routes.js";

const app = express();

db.authenticate()
  .then(() => console.log("Database connected successfully"))
  .catch((err) => console.log("Error: " + err));

app.use(express.json());
app.use(morgan("dev"));
app.use(pagesRoutes);

Inscription.sync();
db.sync();

app.listen(PORT);

console.log("Die backend listening on port", PORT);
