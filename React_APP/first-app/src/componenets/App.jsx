import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import NotesArray from "../notesArray"

// function createNotes(props) {
//   return (
//     <div className="note">
//       <h1>{props.title}</h1>
//       <p>{props.content}</p>
//     </div>
//   );
// }

function App() {
  return (
    <div>
      <Header />
      {NotesArray.map((createNote) =>
        <Note 
          key = {createNote.key} 
          title = {createNote.title} 
          content={createNote.content}
        />
      )}
      <Footer />
    </div>
  );
}


export default App;