import React from "react";

const ArchiveButton = (props) => {
  const { id, onArchive, onUnarchive, isArchive } = props;
  return (
    <button
      className="note-item__archive-button"
      onClick={!isArchive ? () => onArchive(id) : () => onUnarchive(id)}
    >
      {!isArchive ? "Archive" : "Pindahkan"}
    </button>
  );
};

export default ArchiveButton;
