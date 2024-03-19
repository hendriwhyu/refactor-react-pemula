import React from "react";
import { getInitialData, showFormattedDate } from "../utils";
import autoBind from "auto-bind";
import NoteInput from "./NoteInput";
import NoteList from "./NoteList";

class NoteApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: getInitialData(),
      archiveNotes: [],
      searchText: "",
    };
    autoBind(this);
  }
  onAddNoteEventHandler({ title, body }) {
    this.setState((prevState) => {
      return {
        notes: [
          ...prevState.notes,
          {
            id: +new Date(),
            title,
            body,
            createdAt: showFormattedDate(+new Date()),
            archived: false,
          },
        ],
      };
    });
  }
  onSearchEventHandler(title) {
    this.setState({
      searchText: title,
    });
  }
  onArchiveNoteEventHandler(id) {
    const updatedNotes = this.state.notes.filter((note) => note.id !== id);
    const archivedNote = this.state.notes.find((note) => note.id === id);
    archivedNote.archived = true;
    this.setState((prevState) => {
      return {
        notes: updatedNotes,
        archiveNotes: [...prevState.archiveNotes, archivedNote],
      };
    });
  }

  onUnArchiveNoteEventHandler(id) {
    const updatedArchiveNotes = this.state.archiveNotes.filter(
      (note) => note.id !== id
    );
    const unArchivedNote = this.state.archiveNotes.find(
      (note) => note.id === id
    );
    unArchivedNote.archived = false;

    this.setState((prevState) => {
      return {
        archiveNotes: updatedArchiveNotes,
        notes: [...prevState.notes, unArchivedNote],
      };
    });
  }

  onDeleteNoteEventHandler(id) {
    console.log(id);
    const deleteNotes = this.state.notes.filter((note) => note.id !== id);
    const deleteArchivedNote = this.state.archiveNotes.filter(
      (note) => note.id !== id
    );
    this.setState(() => {
      return {
        notes: deleteNotes,
        archiveNotes: deleteArchivedNote,
      };
    });
  }

  listNotes(notesArray) {
    const { searchText } = this.state;
    if (searchText) {
      return notesArray.filter((note) =>
        note.title.toLowerCase().includes(searchText.toLowerCase())
      );
    } else {
      return notesArray;
    }
  }

  render() {
    const filteredNotes = this.listNotes(this.state.notes);
    const filteredArchiveNotes = this.listNotes(this.state.archiveNotes);

    return (
      <>
        <div className="note-app__header">
          <h1>Notes</h1>
          <div className="note-search">
            <input
              type="text"
              placeholder="Cari catatan ..."
              value={this.state.searchText}
              onChange={(e) => this.onSearchEventHandler(e.target.value)}
            />
          </div>
        </div>
        <div className="note-app__body">
          <NoteInput addNote={this.onAddNoteEventHandler} />
          <h2>Catatan Aktif</h2>
          <NoteList
            onArchive={this.onArchiveNoteEventHandler}
            onUnarchive={this.onUnArchiveNoteEventHandler}
            onDelete={this.onDeleteNoteEventHandler}
            notes={filteredNotes}
          />
          <h2>Arsip</h2>
          <NoteList
            onArchive={this.onArchiveNoteEventHandler}
            onUnarchive={this.onUnArchiveNoteEventHandler}
            onDelete={this.onDeleteNoteEventHandler}
            notes={filteredArchiveNotes}
          />
        </div>
      </>
    );
  }
}

export default NoteApp;
