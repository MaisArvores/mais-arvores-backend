module.exports = {
  type: process.env.DB_DIALECT,
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  synchronize: false,
  entities: [
    './dist/src/modules/**/entities/**/*.{ts,js}',
    './dist/src/shared/infra/typeorm/entities/**/*.{ts,js}',
  ],
  migrations: [`./dist/src/shared/infra/typeorm/migrations/**/*.{ts,js}`],
  cli: {
    entitiesDir: [
      `./dist/src/modules/**/entities/**/*.{ts,js}`,
      `./dist/src/shared/infra/typeorm/entities/**/*.{ts,js}`,
    ],
    migrationsDir: `./dist/src/shared/infra/typeorm/migrations`,
  },
  autoLoadEntities: true,
};
