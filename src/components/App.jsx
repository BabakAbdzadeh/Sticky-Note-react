import React, {useState} from "react";

import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";

import CreateNote from "./CreateNote";

const footerData ={
    emoji : "💚",
    name : "Babak",
    year : `${new Date().getFullYear()}`, 
}





function App(){
    const [notesArr, setNotesArr] = useState([]);

    function saveNote(obj){
        console.log(obj)
        setNotesArr(preArr => {
            return [...preArr, obj]
        })
    }


    function deleteNote(id){
        setNotesArr(prevNotesArr => {

            return (prevNotesArr.filter((noteObj, index)=>{
                return index !== id;
            }));
        }
        )

    }
     


    return (
        <div>
            <Header />
            <CreateNote onCreate={saveNote} />
            {notesArr.map((noteObj, index)=>{ return (
                <Note
                    key={index}
                    id={index}
                    title={noteObj.title}
                    content={noteObj.content} 
                    onDelete ={deleteNote} />
           ) })}
            <Footer emoji ={footerData.emoji} name ={footerData.name} year={footerData.year}/>
        </div>
    );
}

// Another way of mapping data with inside call-back function
// notes.map(element => <Note title={element.title} content={element.content});


export default App;