import * as dotenv from 'dotenv';

export function isEmpty(obj: any): boolean {
  if (obj === null || obj === undefined || (obj.length !== undefined && obj.length === 0)
    || Object.keys(obj).length === 0) {
    return true;
  }
  return false;
}

let ENV: any = {};
try {
  ENV = dotenv.config().parsed;
  if (isEmpty(ENV)) {
    console.error('~FILE .env NEED TO BE CONFIGURED~');
    process.exit(1);
  }
} catch (err) {
  console.error('~FILE .env NEED TO BE CONFIGURED~');
  process.exit(1);
}

export { ENV };