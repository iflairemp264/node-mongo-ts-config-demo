import { Schema } from 'mongoose';

export const AdminTokenSchema = new Schema({
  token: String,
  userEmail: String
});