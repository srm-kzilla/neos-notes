import express from "express";
import {
    getNotes,
    getNote,
    createNote,
    deleteNote,
    updateNote,
} from "../controllers/notes.js";

const router = express.Router();

// TODO-5: Implement Routes for the notes controller here

export default router;
