import { MigrationInterface, QueryRunner } from "typeorm";

export class RssItemImg1672848737147 implements MigrationInterface {
    name = 'RssItemImg1672848737147'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`rss_item\` ADD \`imageSrc\` varchar(255) NULL`);
        await queryRunner.query(`ALTER TABLE \`rss_feed\` CHANGE \`type\` \`type\` enum ('0', '1', '2') NOT NULL DEFAULT '0'`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`rss_feed\` CHANGE \`type\` \`type\` enum ('0', '1') NOT NULL DEFAULT '0'`);
        await queryRunner.query(`ALTER TABLE \`rss_item\` DROP COLUMN \`imageSrc\``);
    }

}
