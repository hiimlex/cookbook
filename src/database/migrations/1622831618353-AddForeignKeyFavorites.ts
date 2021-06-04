import { MigrationInterface, QueryRunner } from "typeorm";

export class AddForeignKeyFavorites1622831618353 implements MigrationInterface {
	async up(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.query(
			`ALTER TABLE favorites ADD COLUMN userID "uuid"`
		);

		await queryRunner.query(
			`ALTER TABLE favorites
			ADD CONSTRAINT fk_userID
			FOREIGN KEY (userID) REFERENCES users(id);`
		);
	}

	async down(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.query(
			`ALTER TABLE favorites DROP FOREIGN KEY fk_userID`
		);

		await queryRunner.query(`ALTER TABLE favorites DROP COLUMN userID`);
	}
}
