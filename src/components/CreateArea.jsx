import React from "react";
import NoteAddIcon from '@mui/icons-material/NoteAdd';
import { Fab } from '@mui/material';

function CreateArea(props) {
  const [note, setNote] = React.useState({ title: "", content: "" });
  const [isClicked, setIsClicked] = React.useState(false);

  function changeHandler(event) {
    const { name, value } = event.target;

    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value   // [] brackets around 'name' turn string 'name' (from line 7) into actual value of 'name'
      };
    });
  }

  function addNote(event) {
    event.preventDefault();
    props.newNote(note)
    setNote({ title: "", content: "" })
    setIsClicked(false)

  }

  function handleClick() {
    return setIsClicked((prevValue) => {
      return !prevValue;
    });
  }

  return (
    <div>
      <form className="create-note">
      {isClicked ? 
        <input
          onChange={changeHandler}
          name="title"
          placeholder="Title"
          value={note.title}
        /> : null}
        <textarea
          onChange={changeHandler}
          onClick={handleClick}
          name="content"
          placeholder="Take a note..."
          rows={isClicked ? "3" : "1"}
          value={note.content}
        />
        {isClicked ? <Fab onClick={addNote}><NoteAddIcon/></Fab> : null }
      </form>
    </div>
  );
}

export default CreateArea;
