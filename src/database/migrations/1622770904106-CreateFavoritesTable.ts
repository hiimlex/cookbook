import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateFavoritesTable1622770904106 implements MigrationInterface {
	public async up(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.query('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"');

		await queryRunner.createTable(
			new Table({
				name: "favorites",
				columns: [
					{
						name: "id",
						type: "uuid",
						isPrimary: true,
						generationStrategy: "uuid",
						default: "uuid_generate_v4()",
					},
					{ name: "joke_id", type: "int", isUnique: true },
					{ name: "ask", type: "varchar" },
					{ name: "answer", type: "varchar" },
				],
			})
		);
	}

	public async down(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.dropTable("favorites");
		await queryRunner.query('DROP EXTENSION "uuid-ossp"');
	}
}
