import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateFavoritesTable1622825488919 implements MigrationInterface {
	public async up(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.createTable(
			new Table({
				name: "favorites",
				columns: [
					{
						name: "id",
						type: "int",
						isPrimary: true,
						isUnique: true,
						generationStrategy: "increment",
					},
					{
						name: "jokeID",
						type: "int",
						isUnique: true,
					},
					{
						name: "setup",
						type: "varchar",
					},
					{
						name: "punchline",
						type: "varchar",
					},
					{ name: "type", type: "varchar" },
				],
			})
		);
	}

	public async down(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.dropTable("favorites");
	}
}
