import IModel from "./IModel";

export default interface IUser extends IModel {
  name: string;
  email: string;
  password: string;
  passwordConfirmation: string;
  encryptedPassword?: string;
  createdAt?: Date;
  updatedAt?: Date;
}