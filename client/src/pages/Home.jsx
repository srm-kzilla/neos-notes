import { useState, useEffect } from "react";
import NoteCard from "../components/NoteCard";
import NoteForm from "../components/NoteForm";
import { createNote, deleteNote, updateNote, getNotes } from "../utils/api";

const Home = () => {
  const [notes, setNotes] = useState([]);
  const [currentNote, setCurrentNote] = useState(null);

  useEffect(() => {
    fetchNotes();
  }, []);

  const fetchNotes = async () => {
    try {
      const fetchedNotes = await getNotes();
      setNotes(fetchedNotes);
    } catch (error) {
      console.error("Failed to fetch notes:", error);
    }
  };

  const addNote = async (note) => {
    try {
      const newNote = await createNote(note.title, note.content);
      setNotes((prevNotes) => [...prevNotes, newNote]);
      setCurrentNote(null);
    } catch (error) {
      console.error("Failed to add note:", error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteNote(id);
      setNotes((prevNotes) => prevNotes.filter((note) => note.id !== id));
    } catch (error) {
      console.error("Failed to delete note:", error);
    }
  };

  const handleUpdateNote = async (note) => {
    try {
      await updateNote(note.id, note.title, note.content);
      fetchNotes();
      setCurrentNote(null);
    } catch (error) {
      console.error("Failed to update note:", error);
    }
  };

  return (
    <div className="min-h-[80vh] h-full flex flex-col items-center lg:items-start justify-center lg:flex-row">
      <div className="lg:w-1/4 lg:min-w-max lg:border-r p-6">
        <h1 className="text-xl font-semibold text-black mb-4">
          {currentNote ? "Edit Note" : "Add Note"}
        </h1>
        <NoteForm
          onAddNote={addNote}
          onUpdateNote={handleUpdateNote}
          currentNote={currentNote}
          setCurrentNote={setCurrentNote}
        />
      </div>
      <div className="flex-1 p-8">
        {notes.length === 0 ? (
          <h1 className="text-center text-black font-light text-7xl">
            You suck at taking notes brother, you need us :)
          </h1>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {notes.map((note) => (
              <NoteCard
                key={note.id}
                note={note}
                onDelete={handleDelete}
                onEdit={() => setCurrentNote(note)}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
