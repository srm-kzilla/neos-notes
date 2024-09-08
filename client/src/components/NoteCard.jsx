import Button from "../components/Button";
import "../styles/global.css";

const NoteCard = ({ note, onDelete, onEdit }) => {
  return (
    <div className="note-card">
      <div>
        <h2>{note.title}</h2>
        <p>{note.content}</p>
      </div>
      <div className="note-card-buttons">
        <Button text="Edit" onClick={() => onEdit(note)} type="edit" />
        <Button text="Delete" onClick={() => onDelete(note.id)} type="delete" />
      </div>
    </div>
  );
};

export default NoteCard;
