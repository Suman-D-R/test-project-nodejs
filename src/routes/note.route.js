import express from 'express';
import * as noteController from '../controllers/note.controller';

const routerNote = express.Router();

//route to get all users
routerNote.get('/', noteController.getAllNotes);

//route to create a new user
routerNote.post('', noteController.newNote);


export default routerNote;
