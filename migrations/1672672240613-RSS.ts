import { MigrationInterface, QueryRunner } from "typeorm";

export class RSS1672672240613 implements MigrationInterface {
    name = 'RSS1672672240613'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`rss_feed\` (\`id\` int NOT NULL AUTO_INCREMENT, \`createdAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`deletedAt\` datetime(6) NULL, \`title\` varchar(255) NOT NULL, \`author\` varchar(255) NOT NULL, \`content\` varchar(255) NOT NULL DEFAULT '', \`pubDate\` datetime NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`rss\` (\`id\` int NOT NULL AUTO_INCREMENT, \`createdAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`deletedAt\` datetime(6) NULL, \`title\` varchar(255) NOT NULL, \`link\` varchar(255) NOT NULL, \`rssLink\` varchar(255) NOT NULL, \`lastBuildDate\` datetime NOT NULL, \`type\` enum ('0', '1') NOT NULL DEFAULT '1', PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`user\` ADD \`deletedAt\` datetime(6) NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`user\` DROP COLUMN \`deletedAt\``);
        await queryRunner.query(`DROP TABLE \`rss\``);
        await queryRunner.query(`DROP TABLE \`rss_feed\``);
    }

}
