import { connect } from 'mongoose';
import { ENV } from './config.json';

export class MongoDB {
  connectMongoDB() {
    try {
      if (ENV.MONGODB_USER && ENV.MONGODB_PASSWORD) {
        connect(`mongodb://${ENV.MONGODB_USER}:${ENV.MONGODB_PASSWORD}@${ENV.MONGODB_HOST}:${ENV.MONGODB_PORT}/${ENV.MONGODB_NAME}`, { useUnifiedTopology: true, useNewUrlParser: true });
      } else {
        connect(`mongodb://${ENV.MONGODB_HOST}:${ENV.MONGODB_PORT}/${ENV.MONGODB_NAME}`, { useUnifiedTopology: true, useNewUrlParser: true });
      }
    } catch (err) {
      throw err;
    }
  }    
}