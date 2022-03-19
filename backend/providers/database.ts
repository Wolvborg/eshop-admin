import mongoose, { MongooseError } from 'mongoose';
import Debug from 'debug';
const debug = Debug('file:providers/database');

class Database {
  static init(): void {
    const MONGO_URL = process.env.MONGO_URL;
    if (MONGO_URL) {
      mongoose
        .connect(MONGO_URL)
        .then(() => {
          debug('Mondb Connected');
        })
        .catch((error: MongooseError) => {
          debug(error);
        });
    } else {
      debug('No Mongo Url Presnet');

      throw new Error('No Mongo Url Presnet');
    }
  }
}

export default Database;
