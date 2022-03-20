import { model, Schema } from 'mongoose';
import bcrypt from 'bcrypt';
import Debug from 'debug';
const debug = Debug('file:models/UserModels');

const UserSchema = new Schema({
  firstName: String,
  lastName: String,
  email: String,
  password: String,
  role: Number,
});

UserSchema.pre('save', function (_next) {
  bcrypt.genSalt(10, (err, salt) => {
    if (err) _next(err);

    bcrypt.hash(this.password, salt, (_err, _hash) => {
      if (err) _next(err);
      debug(_hash);
      this.password = _hash;
      _next();
    });
  });
});

const UserModel = model('User', UserSchema);

export default UserModel;
