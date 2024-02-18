<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20240218200100 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE categories CHANGE value value INT NOT NULL');
        $this->addSql('ALTER TABLE orders CHANGE id_user id_user INT NOT NULL, CHANGE id_product id_product INT NOT NULL, CHANGE quantity quantity INT DEFAULT NULL, CHANGE total_price total_price INT DEFAULT NULL');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE categories CHANGE value value NUMERIC(3, 0) NOT NULL');
        $this->addSql('ALTER TABLE orders CHANGE id_user id_user NUMERIC(10, 0) NOT NULL, CHANGE id_product id_product NUMERIC(5, 0) NOT NULL, CHANGE quantity quantity NUMERIC(2, 0) DEFAULT NULL, CHANGE total_price total_price NUMERIC(3, 0) DEFAULT NULL');
    }
}
