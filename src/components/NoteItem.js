import React from "react";
import DeleteButton from "./DeleteButton";
import ArchiveButton from "./ArchiveButton";
import NoteItemContent from "./NoteItemContent";

const NoteItem = ({title, createdAt, body, id, onDelete, onArchive, archived}) => {
    return(
        <div className="note-item">
            <NoteItemContent title={title} createAt={createdAt} body={body} />
            <div className="note-item__action">
                <DeleteButton id={id} onDelete={onDelete} />
                <ArchiveButton id={id} onArchive={onArchive} archived={archived} />
            </div>
        </div>
    );
}

export default NoteItem;