import * as userRoutes from "./user";
import { app } from "../app";
import { ICheckEmail, ICheckPassword, INewUser } from "../types/user";
import { UserErrosEnum } from "../enums/errors";

app.post("/User", async (prop, e) => {
  try {
    await userRoutes.createUser(prop.body as INewUser);
    return true;
  } catch (err) {
    return e.send({
      error: "Usuario com informações faltantes.",
      status: 400,
    });
  }
});

app.post("/check-email", async (prop, event) => {
  try {
    await userRoutes.checkEmail(prop.body as ICheckEmail);

    event.status(200).send(true);
  } catch (err: any) {
    if (err.message === UserErrosEnum.NOT_FOUND) {
      event.status(401).send(UserErrosEnum.NOT_FOUND);
    }
  }
});

app.post("/check-password", async (prop, event) => {
  try {
    await userRoutes.checkPassword(prop.body as ICheckPassword);

    event.status(200).send(true);
  } catch (err: any) {
    if (err.message === UserErrosEnum.WRONG_PASSWORD) {
      event.status(401).send(UserErrosEnum.WRONG_PASSWORD);
    }
  }
});

export { userRoutes };
