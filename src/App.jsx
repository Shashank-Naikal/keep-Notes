import { useState } from "react";
import "./App.css";
import Header from "./Components/header";
import Footer from "./Components/Footer";
import CreateNote from "./Components/CreateNote";
import Note from "./Components/Note";

function App() {
  const [addItem, setAddItem] = useState([]);

  const addNote = (note) => {
    // alert("hi");
    setAddItem((prev) => {
      return [...prev, note];
    });

    console.log(note);
  };

  const onDelete = (id) => {
    setAddItem((prev) => {
      return prev.filter((arrVal, index) => {
        return index !== id;
      });
    });
  };

  return (
    <>
      <Header />
      <CreateNote passNote={addNote} />

      {addItem.map((val, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={val.title}
            content={val.content}
            deleteItem={onDelete}
          />
        );
      })}
      <Footer />
    </>
  );
}

export default App;
