import React from "react";
import { showFormattedDate } from "../utils/showFormattedDate";

const NoteItemContent = ({title, body, createAt}) => {
    return (
        <div className="note-item__content">
            <h3 className="note-item__title">{title}</h3>
            <p className="note-item__date">{showFormattedDate(createAt)}</p>
            <p className="note-item__body">{body}</p>
        </div>
    );
}

export default NoteItemContent;