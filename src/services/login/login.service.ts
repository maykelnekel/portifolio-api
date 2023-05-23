import bcryptjs from "bcryptjs";
import Usuarios from "../../models/user.model";
import jwt from "jsonwebtoken";
import "dotenv/config";
import AppError from "../../errors/appError";

const loginService = async (
  email: string,
  senha: string
): Promise<string | AppError> => {
  const person = await Usuarios.findOne({ where: { email: email } });

  if (!person) {
    throw new AppError(401, "Usuário ou senha incorretos");
  }

  const comparaSenha = bcryptjs.compareSync(senha, person.senha);

  if (!comparaSenha) {
    throw new AppError(401, "Usuário ou senha incorretos");
  }
  const token = jwt.sign(
    { _id: person._id },
    process.env.SECRET_KEY as string,
    { expiresIn: "24h" }
  );
  return token;
};

export default loginService;
