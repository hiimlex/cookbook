module.exports = {
	type: "postgres",
	host: process.env.HOST,
	port: process.env.PORT,
	username: process.env.USERNAME,
	synchronize: true,
	logging: true,
	ssl: true,
	extra: {
		ssl: {
			rejectUnauthorized: false,
		},
	},
	password: process.env.PASSWORD,
	database: process.env.DATABASE,
	entities: ["dist/app/models/*.js"],
	migrations: ["dist/database/migrations/*.js"],
	cli: { migrationsDir: "src/database/migrations" },
};
