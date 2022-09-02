import React from "react";
import NoteSearch from "./NoteSearch";

const NoteHeader = () => {
    return (
        <div className="note-header">
            <h2 className="note-header__logo">Note APP with Fake API</h2>
            <NoteSearch />
            <span className="note-header__copyright">MTech &copy;2022</span>
        </div>
    );
}

export default NoteHeader;