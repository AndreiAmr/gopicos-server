import { db } from "../../app";
import { UserErrosEnum } from "../../enums/errors";
import { ICheckEmail, ICheckPassword, INewUser } from "../../types/user";

const createUser = async (user: INewUser) => {
  try {
    await db.user.create({
      data: user,
    });
    return true;
    // console.log(resp);
  } catch (err) {
    throw new Error("Informções faltantes.");
  }
};

// SELECT * FROM User WHERE User.email = ${user.email}

const checkEmail = async (user: ICheckEmail) => {
  const userFinded = await db.user.findFirst({
    where: {
      email: user.email,
    },
  });

  if (!userFinded) {
    throw new Error(UserErrosEnum.NOT_FOUND);
  }

  return userFinded;
};

const checkPassword = async (user: ICheckPassword) => {
  const userFinded = await checkEmail({ email: user.email });

  const isPasswordTheSame = user.password === userFinded.password;

  if (!isPasswordTheSame) {
    throw new Error(UserErrosEnum.WRONG_PASSWORD);
  }

  return true;
};

export { createUser, checkEmail, checkPassword };
