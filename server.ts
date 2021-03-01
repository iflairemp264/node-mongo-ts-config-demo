import app from './app';
import * as http from 'http';
import { ENV } from './config/config.json'
import { MongoDB } from './config/config';

const port = ENV.SERVER_PORT;

http.createServer(app).listen(port, () => {
  console.log('Express server listening on port ' + port);
  const mdb = new MongoDB();
  mdb.connectMongoDB();
});