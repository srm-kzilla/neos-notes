import { nanoid } from "nanoid";
import fs from "fs";

let notes = [];
if (fs.existsSync("data.json")) {
    notes = JSON.parse(fs.readFileSync("data.json"));
} else {
    fs.writeFileSync("data.json", JSON.stringify(notes));
}

const getNotes = (req, res) => {
    res.send({
        data: notes,
        error: {},
    });
};

const getNote = (req, res) => {
    const { id } = req.params;
    const note = notes.find((note) => note.id === id);
    if (!note) {
        res.status(404).send({
            data: {},
            error: { message: "Note not found" },
        });
    }
    res.send({
        data: note,
        error: {},
    });
};

const createNote = (req, res) => {
    const body = {
        title: req.body.title,
        content: req.body.content,
        time: new Date().getTime(),
        id: nanoid(),
    };
    notes.push(body);
    fs.writeFileSync("data.json", JSON.stringify(notes));
    res.send({
        data: body,
        error: {},
    });
};

const deleteNote = (req, res) => {
    const id = req.params.id;
    const note = notes.find((note) => note.id === id);
    if (note) {
        const index = notes.indexOf(note);
        notes.splice(index, 1);
        fs.writeFileSync("data.json", JSON.stringify(notes));
        res.send(notes);
    } else {
        res.status(404).send({
            data: [],
            error: {
                message: "Note not found",
            },
        });
    }
};

const updateNote = (req, res) => {
    const { id } = req.params;
    const note = notes.find((note) => note.id === id);
    if (!note) {
        res.status(404).send({
            data: {},
            error: { message: "Note not found" },
        });
    } else {
        const index = notes.indexOf(note);
        notes.splice(index, 1, {
            ...note,
            ...req.body,
        });
        fs.writeFileSync("data.json", JSON.stringify(notes));
        res.send(notes);
    }
};

export { getNotes, getNote, createNote, deleteNote, updateNote };
