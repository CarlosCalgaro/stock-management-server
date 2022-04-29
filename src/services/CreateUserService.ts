import IUser from "../interfaces/models/IUser";
import User from '../models/User';
import bcrypt from 'bcrypt';


export default class CreateUserService{


  userParams: IUser;

  constructor(userParams: IUser){
    this.userParams = userParams;
  }

  static async perform(userParams: IUser) : Promise<IUser>{
    return await (new CreateUserService(userParams)).perform();
  }

  async perform() : Promise<IUser>{
    if(this.validate(this.userParams)){
      this.userParams.encryptedPassword = await this.calculateEncryptedPassword(this.userParams.password);
      return User.create(this.userParams);
    }else{
      throw new Error();
    };
  }


  private async calculateEncryptedPassword(password: string) : Promise<string>{
    const salt = await bcrypt.genSalt(10);
    return await bcrypt.hash(password, salt)
    // return "Hey"
  }

  private validate( params: IUser) : boolean {
    if(params.password == params.passwordConfirmation){
      return true;
    }
    return false;
  }
}