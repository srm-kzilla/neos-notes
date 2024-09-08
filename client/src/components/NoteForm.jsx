import { useState, useEffect } from "react";
import Button from "../components/Button";

const NoteForm = ({ onAddNote, onUpdateNote, currentNote, setCurrentNote }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  useEffect(() => {
    if (currentNote) {
      setTitle(currentNote.title);
      setContent(currentNote.content);
    } else {
      setTitle("");
      setContent("");
    }
  }, [currentNote]);

  return (
    <form className="bg-white p-6 rounded-lg shadow-md">
      <input
        type="text"
        className="w-full p-2 mb-4 border rounded"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
      />
      <textarea
        className="w-full p-2 mb-4 border rounded"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Content"
        rows="4"
      ></textarea>
      <div className="flex justify-end gap-2">
        {currentNote ? (
          <>
            <Button
              text="Cancel"
              onClick={() => setCurrentNote(null)}
              type="cancel"
            />
            <Button
              text="Update"
              onClick={() =>
                onUpdateNote({ id: currentNote.id, title, content })
              }
              type="update"
            />
          </>
        ) : (
          <Button
            text="Add"
            onClick={() => onAddNote({ title, content })}
            type="add"
          />
        )}
      </div>
    </form>
  );
};

export default NoteForm;
