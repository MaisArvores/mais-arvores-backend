import {
  MigrationInterface,
  QueryRunner,
  TableColumn,
  TableForeignKey,
} from 'typeorm';

export class alterTableRequestAddColumnDefaultStatus1651233791049
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      'request',
      new TableColumn({
        name: 'id_default_request_status',
        type: 'integer',
        isNullable: true,
      }),
    );
    await queryRunner.createForeignKey(
      'request',
      new TableForeignKey({
        name: 'request_default_request_status_FK',
        referencedTableName: 'default_request_status',
        columnNames: ['id_default_request_status'],
        referencedColumnNames: ['id_default_request_status'],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey(
      'request',
      'request_default_request_status_FK',
    );
    await queryRunner.dropColumn('request', 'id_default_request_status');
  }
}
