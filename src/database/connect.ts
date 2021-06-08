import { createConnection, getConnection } from "typeorm";

const connection = {
	async create() {
		await createConnection().then(() => {
			console.log("Success Connected");
		});
	},

	async close() {
		getConnection().close();
	},

	async clear() {
		const connection = getConnection();
		const entities = connection.entityMetadatas;

		const entityDeletion = entities.map((entity) => async () => {
			const repository = connection.getRepository(entity.name);
			await repository.clear();
		});
		await Promise.all(entityDeletion);
	},
};
export default connection;
