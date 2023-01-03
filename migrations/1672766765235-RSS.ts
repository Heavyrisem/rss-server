import { MigrationInterface, QueryRunner } from "typeorm";

export class RSS1672766765235 implements MigrationInterface {
    name = 'RSS1672766765235'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`rss_feed\` (\`id\` int NOT NULL AUTO_INCREMENT, \`createdAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`deletedAt\` datetime(6) NULL, \`title\` varchar(255) NOT NULL, \`link\` varchar(255) NOT NULL, \`rssLink\` varchar(255) NOT NULL, \`lastBuildDate\` datetime NOT NULL, \`type\` enum ('0', '1') NOT NULL DEFAULT '0', PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`rss_item\` (\`id\` int NOT NULL AUTO_INCREMENT, \`createdAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`deletedAt\` datetime(6) NULL, \`title\` varchar(255) NOT NULL, \`author\` varchar(255) NOT NULL, \`content\` text NOT NULL, \`pubDate\` datetime NOT NULL, \`feedId\` int NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`user\` ADD \`deletedAt\` datetime(6) NULL`);
        await queryRunner.query(`ALTER TABLE \`rss_item\` ADD CONSTRAINT \`FK_120b83cbb0ffee176d1432f2d49\` FOREIGN KEY (\`feedId\`) REFERENCES \`rss_feed\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`rss_item\` DROP FOREIGN KEY \`FK_120b83cbb0ffee176d1432f2d49\``);
        await queryRunner.query(`ALTER TABLE \`user\` DROP COLUMN \`deletedAt\``);
        await queryRunner.query(`DROP TABLE \`rss_item\``);
        await queryRunner.query(`DROP TABLE \`rss_feed\``);
    }

}
