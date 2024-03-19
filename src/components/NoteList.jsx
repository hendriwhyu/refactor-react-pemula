import React from "react";
import NoteItem from "./NoteItem";
import { showFormattedDate } from "../utils";
const NoteList = (props) => {
  const { notes, onDelete, onArchive, onUnarchive } = props;
  // console.table(notes);
  if (notes.length > 0) {
    return (
      <div className="notes-list">
        {notes.map((note) => (
          <NoteItem
            key={note.id}
            title={note.title}
            body={note.body}
            date={showFormattedDate(note.createdAt)}
            createdAt={note.createdAt}
            id={note.id}
            isArchive={note.archived}
            onDelete={onDelete}
            onArchive={onArchive}
            onUnarchive={onUnarchive}
          />
        ))}
      </div>
    );
  } else {
    return <p className="notes-list__empty-message">Tidak ada catatan</p>;
  }
};

export default NoteList;
