import { MigrationInterface, QueryRunner } from "typeorm";

export class ForeignKey1623032030032 implements MigrationInterface {
	public async up(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.query(
			`ALTER TABLE favorites
			ADD CONSTRAINT fk_userID
			FOREIGN KEY (userID) REFERENCES users(id);`
		);
	}

	public async down(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.query(
			`ALTER TABLE favorites DROP CONSTRAINT fk_userID`
		);
	}
}
