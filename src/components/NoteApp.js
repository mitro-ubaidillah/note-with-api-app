import React from "react";
import { useState, useEffect } from "react";
import NoteHeader from "./NoteHeader";
import NoteSidebar from "./NoteSideBar";
import NoteItemList from "./NoteItemList";

const NoteApp = () =>  {
    const [notes, setNote] = useState([]);
    useEffect(() => {
        fetch("http://localhost:8000/notes/")
        .then((res) => {
            return res.json();
        }).then((data) => {
            setNote(data);
        }).catch((err) => {
            if(err.name === "AbortError"){
                console.log("fetch aborted");
            }
        });
    }, []);

    
    return(
        <div className="note-app">
            <NoteHeader />
            <div className="note-content">
                <div className="flex-left">
                    <NoteSidebar />
                </div>
                <div className="flex-right">
                    <NoteItemList notes={notes} />
                </div>
            </div>
        </div>
    );
}

export default NoteApp;