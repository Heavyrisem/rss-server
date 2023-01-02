import { MigrationInterface, QueryRunner } from "typeorm";

export class RSS1672678771253 implements MigrationInterface {
    name = 'RSS1672678771253'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`rss_item\` (\`id\` int NOT NULL AUTO_INCREMENT, \`createdAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`deletedAt\` datetime(6) NULL, \`title\` varchar(255) NOT NULL, \`author\` varchar(255) NOT NULL, \`content\` varchar(255) NOT NULL DEFAULT '', \`pubDate\` datetime NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`rss_feed\` DROP COLUMN \`author\``);
        await queryRunner.query(`ALTER TABLE \`rss_feed\` DROP COLUMN \`content\``);
        await queryRunner.query(`ALTER TABLE \`rss_feed\` DROP COLUMN \`pubDate\``);
        await queryRunner.query(`ALTER TABLE \`rss_feed\` ADD \`link\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`rss_feed\` ADD \`rssLink\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`rss_feed\` ADD \`lastBuildDate\` datetime NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`rss_feed\` ADD \`type\` enum ('0', '1') NOT NULL DEFAULT '1'`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`rss_feed\` DROP COLUMN \`type\``);
        await queryRunner.query(`ALTER TABLE \`rss_feed\` DROP COLUMN \`lastBuildDate\``);
        await queryRunner.query(`ALTER TABLE \`rss_feed\` DROP COLUMN \`rssLink\``);
        await queryRunner.query(`ALTER TABLE \`rss_feed\` DROP COLUMN \`link\``);
        await queryRunner.query(`ALTER TABLE \`rss_feed\` ADD \`pubDate\` datetime NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`rss_feed\` ADD \`content\` varchar(255) NOT NULL DEFAULT ''`);
        await queryRunner.query(`ALTER TABLE \`rss_feed\` ADD \`author\` varchar(255) NOT NULL`);
        await queryRunner.query(`DROP TABLE \`rss_item\``);
    }

}
