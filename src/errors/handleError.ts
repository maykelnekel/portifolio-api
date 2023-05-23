import { NextFunction, Request, Response } from "express";
import AppError from "./appError";

const handleError = (
  error: any,
  _: Request,
  res: Response,
  __: NextFunction
) => {
  if (error instanceof AppError) {
    return res.status(error.status).json({ error: error.message });
  }

  console.log(error);
  return res.status(500).json({ error: error.message });
};

export default handleError;
