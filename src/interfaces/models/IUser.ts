export default interface IUser {
  name: string;
  email: string;
  password: string;
  passwordConfirmation: string;
  encryptedPassword?: string;
  createdAt?: Date;
  updatedAt?: Date;
}