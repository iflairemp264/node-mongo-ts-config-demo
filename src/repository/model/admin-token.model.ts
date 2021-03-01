import { Document } from 'mongoose';

interface AdminTokenModel extends Document {
  token: string;
  userEmail: string;
}

export {
  AdminTokenModel
}