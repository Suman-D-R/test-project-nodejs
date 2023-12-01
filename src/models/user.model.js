import { Schema, model } from 'mongoose';

const userSchema = new Schema(
  {
    name: {
      type: String
    },
    age:{
      type: Number
    },
    phone_number:{
      type: Number
    }
  },
  {
    timestamps: true
  }
);

export default model('User', userSchema);
