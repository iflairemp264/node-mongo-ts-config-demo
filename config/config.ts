import { connect } from 'mongoose';
import { ENV } from './config.json';

export class MongoDB {
  connectMongoDB() {
    try {
      if (ENV.MONGODB_USER && ENV.MONGODB_PASSWORD) {
        connect(`mongodb+srv://iflairemp245:iflair123@cluster0-sodc3.mongodb.net/test?authSource=admin&replicaSet=Cluster0-shard-0&w=majority&readPreference=primary&appname=MongoDB%20Compass&retryWrites=true&ssl=true`, { useUnifiedTopology: true, useNewUrlParser: true });
      } else {
        connect(`mongodb+srv://iflairemp245:iflair123@cluster0-sodc3.mongodb.net/test?authSource=admin&replicaSet=Cluster0-shard-0&w=majority&readPreference=primary&appname=MongoDB%20Compass&retryWrites=true&ssl=true`, { useUnifiedTopology: true, useNewUrlParser: true });
      }
    } catch (err) {
      throw err;
    }
  }
}