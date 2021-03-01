import { connect } from 'mongoose';
import { ENV } from './config.json';

export class MongoDB {
  connectMongoDB() {
    try {
      if (ENV.MONGODB_USER && ENV.MONGODB_PASSWORD) {
        connect(`your mongo cluster connection link is here`, { useUnifiedTopology: true, useNewUrlParser: true });
      } else {
        connect(`your mongo cluster connection link is here`, { useUnifiedTopology: true, useNewUrlParser: true });
      }
    } catch (err) {
      throw err;
    }
  }
}