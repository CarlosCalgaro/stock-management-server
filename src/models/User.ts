import mongoose, { Schema } from "mongoose";
import IUser from '../interfaces/models/IUser';

const UserSchema: Schema = new Schema<IUser>({
    name: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true
    },
    encryptedPassword: {
      type: String,
      required: true
    },
}, { timestamps: true})

const User =  mongoose.model<IUser>('User', UserSchema)

export default User;