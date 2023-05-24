import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import AppError from "../errors/appError";

const authenticationMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
): AppError | void => {
  let token = req.headers.authorization;
  if (!token) {
    throw new AppError(401, "Token de autorização inválido");
  }

  token = token.split(" ")[1];
  jwt.verify(
    token,
    process.env.SECRET_KEY as string,
    (error: any, decoded: any) => {
      if (error) {
        throw new AppError(403, error.message);
      }
      req.user = {
        _id: decoded._id,
      };

      return next();
    }
  );
};

export default authenticationMiddleware;
