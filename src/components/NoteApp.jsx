import React from "react";
import { getInitialData, showFormattedDate } from "../utils";
import autoBind from "auto-bind";
import NoteInput from "./NoteInput";
import NoteList from "./NoteList";
import { Footer, Navbar, TextInput } from "flowbite-react";

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
        <Navbar fluid rounded className="bg-cyan-700 text-white">
          <Navbar.Brand>
            <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
              Note App
            </span>
          </Navbar.Brand>
          <Navbar.Collapse>
            <TextInput
              id="searchBar"
              type="text"
              placeholder="Cari catatan ..."
              className="w-64"
              value={this.state.searchText}
              onChange={(e) => this.onSearchEventHandler(e.target.value)}
            />
          </Navbar.Collapse>
        </Navbar>
        <div className="my-4">
          <NoteInput addNote={this.onAddNoteEventHandler} />
          <div className="container mx-auto">
            <h2 className="text-xl font-semibold mb-5">Catatan Aktif</h2>
            <NoteList
              onArchive={this.onArchiveNoteEventHandler}
              onUnarchive={this.onUnArchiveNoteEventHandler}
              onDelete={this.onDeleteNoteEventHandler}
              notes={filteredNotes}
            />
          </div>
          <div className="container mx-auto">
            <h2 className="text-xl font-semibold mb-5">Arsip</h2>
            <NoteList
              onArchive={this.onArchiveNoteEventHandler}
              onUnarchive={this.onUnArchiveNoteEventHandler}
              onDelete={this.onDeleteNoteEventHandler}
              notes={filteredArchiveNotes}
            />
          </div>
        </div>
        <Footer container className="bg-cyan-700 rounded-none">
          <div className="w-full text-center">
            <Footer.Copyright href="https://www.instagram.com/hendri.whyu/" className="text-white text-lg" by="Hendri Wahyu Perdana" year={2024} />
          </div>
        </Footer>
      </>
    );
  }
}

export default NoteApp;
