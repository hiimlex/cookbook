import { createConnection } from "typeorm";

try {
	createConnection().then(() => console.log("Success connectedd"));
} catch (err) {
	throw new Error(err);
}
