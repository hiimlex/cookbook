module.exports = {
	type: "postgres",
	url: process.env.DATABASE_URL_SSL,
	extra: {
		ssl: process.env.SSL,
	},
	entities: ["dist/app/models/*.js"],
	migrations: ["dist/database/migrations/*.js"],
	cli: { migrationsDir: "src/database/migrations" },
};
