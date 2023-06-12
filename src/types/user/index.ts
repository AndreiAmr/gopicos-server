export interface INewUser {
  name: string;
  email: string;
  password: string;
}

export interface ICheckEmail {
  email: string;
}

export interface ICheckPassword extends ICheckEmail {
  password: string;
}
