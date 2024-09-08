import express from "express";
import {
    getNotes,
    getNote,
    createNote,
    deleteNote,
    updateNote,
} from "../controllers/notes.js";

const router = express.Router();

// TODO-4: Implement Routes for the notes controller here

export default router;
