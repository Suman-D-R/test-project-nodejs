import Note from '../models/note.model';

//get all users
export const getAllNotes = async () => {
  const data = await Note.find();
  return data;
};

//create new user
export const newNote = async (body) => {
  const data = await Note.create(body);
  return data;
};


