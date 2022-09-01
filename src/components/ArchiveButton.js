import React from "react";

const ArchiveButton = ({onArchive, id, archived}) => {
    return <button className="note-item__archive-button" onClick={() => onArchive(id)} archived={archived}>Arsipkan</button>
}

export default ArchiveButton;