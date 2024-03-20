import React from "react";
import autoBind from "auto-bind";
import { Button, Label, TextInput, Textarea } from "flowbite-react";

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
      <div className="container mx-auto flex-col items-center justify-center flex mb-12">
        <h2 className="text-xl font-semibold">Buat catatan</h2>
        <form
          className="flex max-w-2xl w-4/5 flex-col gap-4"
          onSubmit={this.onSubmitChangeEventHandler}
        >
          <div>
            <div className="mb-2 block">
              <Label htmlFor="Title" value="Title" className="items-center" />
              <p className="align-right">Sisa karakter: {character}</p>
            </div>
            <TextInput
              id="Title"
              type="text"
              placeholder="Ini adalah judul ..."
              required
              value={this.state.title}
              onChange={this.onTitleChangeEventHandler}
            />
          </div>
          <div>
            <div className="mb-2 block">
              <Label
                htmlFor="detail"
                value="Catatan"
                className="items-center"
              />
            </div>
            <Textarea
              id="detail"
              placeholder="Tuliskan catatanmu di sini ..."
              required
              rows={4}
              value={this.state.body}
              onChange={this.onBodyChangeEventHandler}
            />
          </div>
          <Button type="submit" label="2">
            Messages
          </Button>
        </form>
      </div>
    );
  }
}

export default NoteInput;
