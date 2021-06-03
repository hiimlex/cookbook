import { createConnection } from "typeorm";

try {
	createConnection().then(() => console.log("Success connected"));
} catch (err) {
	throw new Error(err);
}
