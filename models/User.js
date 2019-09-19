import { Schema, model } from 'mongoose';

const UserSchema = new Schema({
    first: String,
    last: String,
    avatar: String,
    email: String
});

export const User = model('User', UserSchema);