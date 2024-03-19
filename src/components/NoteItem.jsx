import React from "react";
import NoteItemContent from "./NoteItemContent";
import NoteItemAction from "./NoteItemAction";
const NoteItem = (props) => {
  const { title, date, body, onDelete, onArchive, id, isArchive, onUnarchive } =
    props;
  
  return (
    <div className="note-item">
      <NoteItemContent title={title} date={date} body={body} />
      <NoteItemAction
        id={id}
        onDelete={onDelete}
        isArchive={isArchive}
        onUnarchive={onUnarchive}
        onArchive={onArchive}
      />
    </div>
  );
};

export default NoteItem;
