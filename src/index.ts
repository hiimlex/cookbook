import express from "express";
import routes from "./routes";
import "reflect-metadata";
import "./database/connect";

require("dotenv/config");

const app = express();

app.use(express.json());
app.use(routes);

const server = app.listen(process.env.PORT || 4200, () =>
	console.log("Server running at http://localhost:4200")
);

process.on("SIGTERM", shutDown);
process.on("SIGINT", shutDown);

function shutDown() {
	console.log("REceived kill signal, shutting down gracefully");
	server.close(() => {
		console.log("Closed out remaining connections");
		process.exit(0);
	});

	setTimeout(() => {
		console.error(
			"Could not close connections in time, forcefully shutting down"
		);
		process.exit(1);
	}, 10000);
}
