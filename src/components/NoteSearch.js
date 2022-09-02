import React from "react";

const NoteSearch = ({search, onSearch}) => {
    return (
        <div className="note-search">
            <input type="text" placeholder="Cari disini..." value={search} onChange={onSearch} />
        </div>
    );
}

export default NoteSearch;