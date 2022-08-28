import { MigrationInterface, QueryRunner } from 'typeorm';

export class AddColumnsInMovies1661700456187 implements MigrationInterface {
  name = 'AddColumnsInMovies1661700456187';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "movies" ADD "created_at" TIMESTAMP NOT NULL DEFAULT now()`,
    );
    await queryRunner.query(
      `ALTER TABLE "movies" ADD "updated_at" TIMESTAMP NOT NULL DEFAULT now()`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "movies" DROP COLUMN "updated_at"`);
    await queryRunner.query(`ALTER TABLE "movies" DROP COLUMN "created_at"`);
  }
}
