import { DataSource } from 'typeorm';
// eslint-disable-next-line import/no-extraneous-dependencies
import request from 'supertest';
import { createConnection } from '../../../../../shared/infra/typeorm';
import { app } from '../../../../../shared/infra/http/app';

describe('User integrated test suit', () => {
  let connection: DataSource;

  beforeAll(async () => {
    connection = await createConnection('test-connection');
    await connection.runMigrations();
  });

  afterAll(async () => {
    await connection.dropDatabase();

    await connection.destroy();
  });

  it('should create an User', async () => {
    const { body, status } = await request(app).post('/users').send({
      username: 'jorginho123',
      email: 'jorginho123@gmail.com',
      password: '123testando',
    });

    expect(status).toBe(201);

    expect(body).toHaveProperty('id');
  });

  it('should not create an User if username already exists', async () => {
    const { body, status } = await request(app).post('/users').send({
      username: 'jorginho123',
      email: 'jorginho1234@gmail.com',
      password: '123testando',
    });

    expect(status).toBe(400);

    expect(body).toEqual(
      expect.objectContaining({
        message: 'username already in use',
      }),
    );
  });

  it('should not create an User if email already exists', async () => {
    const { body, status } = await request(app).post('/users').send({
      username: 'jorginho1234',
      email: 'jorginho123@gmail.com',
      password: '123testando',
    });

    expect(status).toBe(400);

    expect(body).toEqual(
      expect.objectContaining({
        message: 'email already in use',
      }),
    );
  });
});
