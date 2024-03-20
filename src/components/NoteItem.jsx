import React from "react";
import NoteItemContent from "./NoteItemContent";
import NoteItemAction from "./NoteItemAction";
import { Card } from "flowbite-react";
const NoteItem = (props) => {
  const { title, date, body, onDelete, onArchive, id, isArchive, onUnarchive } =
    props;

  return (
    <div className="w-full p-4 flex flex-col text-left bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
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
