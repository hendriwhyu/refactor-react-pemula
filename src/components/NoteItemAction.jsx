import React from "react";
import DeleteButton from "./DeleteButton";
import ArchiveButton from "./ArchiveButton";
const NoteItemAction = (props) => {
  const { id, onDelete, onArchive, isArchive, onUnarchive } = props;
  return (
    <div className="items-center justify-center space-y-4 sm:flex sm:space-x-4 sm:space-y-0">
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
