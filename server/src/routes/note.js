import express from 'express'
import * as NoteController from "../controllers/note.js";
import { verifyToken } from '../middleware/verifyAuth.js';

const router = express.Router();

router.post('/create', verifyToken, NoteController.createNote);
router.get('/', verifyToken, NoteController.getUserNote);
router.get('/:noteid', verifyToken, NoteController.getASingleNote);//params must begin with a colon
router.delete('/:noteid', verifyToken, NoteController.deleteANote);
router.patch('/:noteid', verifyToken, NoteController.updateANote);

export default router; 