import { Schema } from 'mongoose';

export const MovieSchema = new Schema({
  title: String,
	description: String,
});