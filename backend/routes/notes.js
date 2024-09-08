import express from "express";
import {
    getNotes,
    getNote,
    createNote,
    deleteNote,
    updateNote,
} from "../controllers/notes.js";

const router = express.Router();

router.get("/", getNotes);
router.get("/:id", getNote);
router.post("/", createNote);
router.put("/:id", updateNote);
router.delete("/:id", deleteNote);

export default router;
