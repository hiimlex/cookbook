import { MigrationInterface, QueryRunner } from "typeorm";

export class AlterUserInfo1623031350722 implements MigrationInterface {
	public async up(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.query(
			`ALTER TABLE users ADD name varchar NOT NULL,
			ADD phone varchar(11) NOT NULL,
			ADD CEP varchar(8) NOT NULL;`
		);
	}

	public async down(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.query(`
		ALTER TALBE users DROP COLUMN name, phone, CEP;`);
	}
}
