import { Schema, model } from 'mongoose';

const userSchema = new Schema(
  {
    noteTitle: {
      type: String
    },
    noteDiscription:{
      type: String
    }
  },
  {
    timestamps: true
  }
);

export default model('Note', userSchema);
