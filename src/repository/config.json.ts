import * as dotenv from 'dotenv';
let ENV: any = {};
try {
  ENV = dotenv.config().parsed;
} catch (err) {
  console.error('~FILE .env NEED TO BE CONFIGURED~');
  process.exit(1);
}

export {
  ENV
};