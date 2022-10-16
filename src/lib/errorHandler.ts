import { Request, Response, NextFunction } from 'express';
import { AuthenticationError, AuthorizationError, GenericError, NotFoundError, ServiceError, ValidationError } from '.';
import config, { AppEnvironmentEnum } from '../config';
import { errorLogger } from './logger';

const logError = (err: any, req: Request) => {
  errorLogger.error(err.message, {
    url: req.originalUrl,
    method: req.method,
    body: req.body,
    stack: err.stack,
  });
};

const errorHandler = (err: GenericError, req: Request, res: Response, next: NextFunction): void | Response => {
  if (res.headersSent) {
    return next(err);
  }
  switch (err.statusCode) {
    case ServiceError.statusCode:
    case NotFoundError.statusCode:
    case AuthenticationError.statusCode:
    case AuthorizationError.statusCode:
      // if (config.env.isTest) logError(err, req);
      return res.status(err.statusCode).send({
        status: 'error',
        errCode: err.statusCode,
        message: err.message,
      });
    case ValidationError.statusCode:
      // if (config.env.isTest) logError(err, req);
      return res.status(err.statusCode).send({
        status: 'error',
        message: err.message,
        errors: (err as ValidationError).errors,
      });
    default:
      logError(err, req);
      return res.status(500).send({
        status: 'error',
        message: 'an error occurred',
        ...([AppEnvironmentEnum.LOCAL, AppEnvironmentEnum.DEVELOPMENT, AppEnvironmentEnum.STAGING].includes(
          config.app.env,
        )
          ? { stack: err.stack }
          : {}),
      });
  }
};

export default errorHandler;