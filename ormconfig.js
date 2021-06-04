module.exports = {
	type: "postgres",
	host: process.env.HOST,
	port: process.env.PORT,
	username: process.env.USER,
	password: process.env.PASSWORD,
	database: process.env.DATABASE,
	ssl: {
		rejectUnauthorized: false,
	},
	entities: ["dist/app/models/*.js"],
	migrations: ["dist/database/migrations/*.js"],
	cli: { migrationsDir: "src/database/migrations" },
};
