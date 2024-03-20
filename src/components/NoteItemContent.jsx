import React from "react";
import NoteItemAction from "./NoteItemAction";

const NoteItemContent = (props) => {
  const { title, date, body } = props;
  return (
    <div className="item_content h-full">
      <h5 className="mb-2 text-3xl font-bold text-gray-900 dark:text-white">
        {title}
      </h5>
      <p className="mb-3 text-base text-gray-500 dark:text-gray-400 sm:text-lg">
        {date}
      </p>
      <p className="mb-5 text-base text-gray-500 dark:text-gray-400 sm:text-lg">
        {body}
      </p>
    </div>
  );
};
export default NoteItemContent;
