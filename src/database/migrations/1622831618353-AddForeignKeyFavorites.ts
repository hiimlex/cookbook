import { MigrationInterface, QueryRunner } from "typeorm";

export class AddForeignKeyFavorites1622831618353 implements MigrationInterface {
	async up(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.query(
			`ALTER TABLE favorites ADD COLUMN userID "uuid"`
		);
	}

	async down(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.query(`ALTER TABLE favorites DROP COLUMN userID`);
	}
}
