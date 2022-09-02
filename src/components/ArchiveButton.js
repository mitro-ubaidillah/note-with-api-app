import React from "react";

const ArchiveButton = ({onArchive, id, archived}) => {
    return <button className="note-item__archive-button" onClick={() => onArchive(id)} archived={archived}>{archived ? 'Pindahkan' : 'Arsipkan'}</button>
}

export default ArchiveButton;