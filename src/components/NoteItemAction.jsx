import React from "react";
import DeleteButton from "./DeleteButton";
import ArchiveButton from "./ArchiveButton";
const NoteItemAction = (props) => {
  const { id, onDelete, onArchive, isArchive, onUnarchive } = props;
  return (
    <div className="note-item__action">
      <DeleteButton id={id} onDelete={onDelete} />
      <ArchiveButton
        id={id}
        onArchive={onArchive}
        isArchive={isArchive}
        onUnarchive={onUnarchive}
      />
    </div>
  );
};

export default NoteItemAction;
