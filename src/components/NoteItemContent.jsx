import React from "react";
import NoteItemAction from "./NoteItemAction";

const NoteItemContent = (props) => {
  const { title, date, body } = props;
  return (
    <div className="note-item__content">
      <h3 className="note-item__title">{title}</h3>
      <p className="note-item__date">{date}</p>
      <p className="note-item__body">{body}</p>
    </div>
  );
};
export default NoteItemContent;
