import React, {useState} from "react";

function CreateNote(props){
    const [note, setNote] = useState({
        title: "",
        content:""
    });


    function update(e){
        const{name, value} = e.target;

        setNote(preValue =>{
           return {...preValue,
            [name] : value}
        });
    };

    function handleClick(event) {
        event.preventDefault();
      }


    return (
        <form onSubmit={handleClick}>
            <input
                onChange={update}
                name="title" 
                placeholder="Title"
                value={note.title}></input>

            <textarea
                onChange={update} 
                name="content"
                placeholder="Take a note..." 
                value={note.content}
                rows="3"></textarea>

            <button onClick={()=>{
                // DOWN HERE FUNCTION
                props.onCreate(note);
                setNote({title:"", content:""});
                preventDefault();
            }}>Add</button>
        </form>
    );

};


export default CreateNote;