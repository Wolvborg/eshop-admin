import { Model, Schema } from 'mongoose';

const UserSchema = new Schema({
  firstName: String,
  lastName: String,
  email: String,
  password: String,
  role: Number,
});

const UserModel = new Model('User', UserSchema);

export default UserModel;
