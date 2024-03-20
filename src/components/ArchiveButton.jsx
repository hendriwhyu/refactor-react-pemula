import { Button } from "flowbite-react";
import React from "react";
import { MdArchive, MdUnarchive } from "react-icons/md";

const ArchiveButton = (props) => {
  const { id, onArchive, onUnarchive, isArchive } = props;
  return (
    <Button onClick={!isArchive ? () => onArchive(id) : () => onUnarchive(id)}>
      {!isArchive ? (
        <MdArchive className="mr-2 h-5 w-5" />
      ) : (
        <MdUnarchive className="mr-2 h-5 w-5" />
      )}
      {!isArchive ? "Archive" : "Pindahkan"}
    </Button>
  );
};

export default ArchiveButton;
