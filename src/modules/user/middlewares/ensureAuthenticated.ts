import { NextFunction, Request, Response } from 'express';
import { JwtTokenManagerProvider } from '../../../shared/providers/TokenManagerProvider/implementations/JwtTokenManagerProvider';
import api from '../../../config/api';

interface IPayload {
  sub: string;
}

export async function ensureAuthenticated(
  request: Request,
  response: Response,
  next: NextFunction,
) {
  const tokenManagerProvider = new JwtTokenManagerProvider();

  const authToken = request.headers.authorization;

  if (!authToken) {
    response.status(401).end();
  }

  const apiConfig = api();

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const [, token] = authToken.split(' ');

  const { sub } = (await tokenManagerProvider.verify(
    token,
    apiConfig.JWT_SECRET,
  )) as IPayload;

  request.userId = sub;

  return next();
}
