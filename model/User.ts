import mongoose, { Schema, Document, Model } from 'mongoose';
import { ObjectId } from "mongoose";

interface IUser extends Document {
  _id: ObjectId | string;
  name: string;
  email: string;
  password: string;
  mob: string;
}

const userSchema: Schema<IUser> = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  mob: {
    type: String,
    required: true,
  },
}, { timestamps: true });

const User: Model<IUser> = mongoose.models.User || mongoose.model<IUser>('User', userSchema);

export default User;

