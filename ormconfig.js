module.exports = {
	type: "postgres",
	url: "postgres://postgres:postgres@localhost:5432/cookbook",
	logging: true,
	synchronize: true,
	entities: ["src/app/models/*.ts"],
	migrations: ["src/database/migrations/*.ts"],
	cli: { migrationsDir: "src/database/migrations" },
};
