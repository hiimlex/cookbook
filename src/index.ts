import express from "express";
import routes from "./routes";
import "reflect-metadata";
import "./database/connect";

require("dotenv/config");

const app = express();

app.use(express.json());
app.use(routes);

app.listen(process.env.APP_PORT || 4200, () =>
	console.log("Server running at http://localhost:4200")
);
