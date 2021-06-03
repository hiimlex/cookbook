module.exports = {
	type: "postgres",
	host: process.env.HOST,
	port: process.env.PORT,
	username: process.env.USERNAME,
	ssl: true,
	password: process.env.PASSWORD,
	database: process.env.DATABASE,
	entities: ["dist/app/models/*.js"],
	migrations: ["dist/database/migrations/*.js"],
	cli: { migrationsDir: "src/database/migrations" },
};
