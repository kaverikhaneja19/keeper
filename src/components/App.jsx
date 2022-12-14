import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";


function App () {

    const [notes, setNotes] = React.useState([]);   //array to store notes

    function newNote(note) {
        setNotes(prevNote => {
            return [...prevNote, note];
        })
    }

    function deleteNote(id) {
        setNotes(prevNotes => {
            return prevNotes.filter((noteItem, index) => {
                return index !== id;
            })
        })
    }

    return (
        <div>
            <Header />
            <CreateArea newNote={newNote}/>
            {notes.map((noteItem, index) => 
            <Note 
             key={index}
             id={index} 
             title={noteItem.title} 
             content={noteItem.content} 
             onDelete={deleteNote}
             />
            )}
            <Footer />
        </div>
    )
}

export default App;