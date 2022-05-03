import 'reflect-metadata';
import { Connection, createConnection, getConnectionOptions } from 'typeorm';
import { config } from 'dotenv-flow';
import database from '../../../config/database';

config({ silent: true });

const databaseConfig = database();

export default async (name = 'default'): Promise<Connection> => {
  const defaultOptions = await getConnectionOptions();

  return createConnection(
    Object.assign(defaultOptions, {
      name,
      database:
        process.env.NODE_ENV === 'test'
          ? databaseConfig.TEST_NAME
          : defaultOptions.database,
    }),
  );
};
