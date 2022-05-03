import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class createTableDefaultRequestStatus1651233456576
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'default_request_status',
        columns: [
          {
            name: 'id_default_request_status',
            type: 'integer',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'increment',
          },
          {
            name: 'description',
            type: 'varchar',
          },
        ],
      }),
    ),
      await queryRunner.query(
        `INSERT INTO default_request_status (description) VALUES ("Pedido recebido"), ("Pedido em preparação"), ("Pedido em rota de entrega"), ("Pedido finalizado")`,
      );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('default_request_status');
  }
}
