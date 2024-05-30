import React, { useState } from "react";
import { Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

const CreateNote = ({ passNote }) => {
  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  const [expand, setExpand] = useState(false);

  const inputEvent = (e) => {
    const { name, value } = e.target;
    setNote((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });

    // console.log(note);
  };

  const addEvent = () => {
    passNote(note);
    setNote({
      title: "",
      content: "",
    });
  };

  const show = () => {
    setExpand(true);
  };
  const hide = () => {
    setExpand(false);
  };

  return (
    <>
      <div className="main_note" onDoubleClick={hide}>
        <form>
          {expand ? (
            <input
              type="text"
              value={note.title}
              onChange={inputEvent}
              name="title"
              placeholder="Title"
              autoComplete="off"
            />
          ) : null}
          <textarea
            cols=""
            rows=""
            value={note.content}
            onChange={inputEvent}
            name="content"
            placeholder="write a note"
            onClick={show}
          ></textarea>
          {expand ? (
            <Button onClick={addEvent}>
              <AddIcon className="plus-sign" />
            </Button>
          ) : null}
        </form>
      </div>
    </>
  );
};

export default CreateNote;
