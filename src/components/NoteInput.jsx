import React from "react";
import autoBind from "auto-bind";

class NoteInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      body: "",
      limitCharacters: 50,
    };
    autoBind(this);
  }

  onTitleChangeEventHandler = (event) => {
    const { value } = event.target;

    if (value.length <= this.state.limitCharacters) {
      this.setState({
        title: value,
      });
    }
  };

  onBodyChangeEventHandler = (event) => {
    this.setState({
      body: event.target.value,
    });
  };

  onSubmitChangeEventHandler = (event) => {
    event.preventDefault();
    this.props.addNote(this.state);
  };

  countCharacter = () => {
    const { limitCharacters, title } = this.state;
    let count = limitCharacters - title.length;
    return count;
  };
  render() {
    let character = this.countCharacter();

    return (
      <div className="note-input">
        <h2>Buat catatan</h2>
        <form onSubmit={this.onSubmitChangeEventHandler}>
          <p className="note-input__title__char-limit">
            Sisa karakter: {character}
          </p>
          <input
            className="note-input__title"
            type="text"
            placeholder="Ini adalah judul ..."
            required
            value={this.state.title}
            onChange={this.onTitleChangeEventHandler}
          />
          <textarea
            className="note-input__body"
            type="text"
            placeholder="Tuliskan catatanmu di sini ..."
            required
            value={this.state.body}
            onChange={this.onBodyChangeEventHandler}
          ></textarea>
          <button type="submit">Buat</button>
        </form>
      </div>
    );
  }
}

export default NoteInput;
