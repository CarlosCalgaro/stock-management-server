
import {Request, Response, NextFunction} from 'express';
import User from '../../../../models/User';
import CreateUserService from '../../../../services/CreateUserService';
import IUser from '../../../../interfaces/models/IUser';

class UsersController{

  constructor(){
    this.post = this.post.bind(this);
  }

  async index(req: Request, res: Response, next: NextFunction){
    let users = await User.find({});
    res.status(200).json( {users} )
  }

  async post(req: Request, res: Response, next: NextFunction){
    let userParams : IUser = this.userParams(req.body)
    let user : IUser = await CreateUserService.perform(userParams);
    res.status(200).json( { user } )
  }

  async delete(){
  }

  private userParams(params: object) : IUser {
    return params["user" as keyof object];
  }
}

export default UsersController;