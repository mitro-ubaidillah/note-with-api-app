import React from "react";
import { useState, useEffect } from "react";
import NoteHeader from "./NoteHeader";
import NoteSidebar from "./NoteSideBar";
import NoteItemList from "./NoteItemList";
import AddButton from "./AddButton";

const NoteApp = () =>  {
    const [notes, setNote] = useState([]);
    const [noteView, setNoteView] = useState([]);
    const [keyword, setKeyword] = useState("");

    useEffect(() => {
        fetch("http://localhost:8000/notes/")
        .then((res) => {
            return res.json();
        }).then((data) => {
            setNote(data);
            setNoteView(data);
        }).catch((err) => {
            if(err.name === "AbortError"){
                console.log("fetch aborted");
            }
        });
    }, []);
    
    const onArchived = () => { 
       const noteArchive =  notes.filter((note) => {
            return note.archived === true;
        });
        setNoteView(noteArchive);
    }

    const onActive = () => {
        const noteArchive =  notes.filter((note) => {
            return note.archived === false;
        });
        setNoteView(noteArchive);
    }

    const onAll = () => {
        setNoteView(notes);
    }
    
    const noteViewAll = noteView.filter((note) => note.title.toLowerCase().includes(keyword.toLowerCase()));

    return(
        <div className="note-app">
            <NoteHeader search={keyword} onSearch={(e) => setKeyword(e.target.value)} />
            <div className="note-content">
                <div className="flex-left">
                    <NoteSidebar onArchived={onArchived} onAll={onAll} onActive={onActive} />
                </div>
                <div className="flex-right">
                    <NoteItemList notes={noteViewAll} />
                    <AddButton />
                </div>
            </div>
        </div>
    );
}

export default NoteApp;