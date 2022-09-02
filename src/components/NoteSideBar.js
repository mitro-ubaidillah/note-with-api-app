import React from "react";

const NoteSidebar = ({onActive, onArchived, onAll}) => {
    return(
        <div className="note-sidebar">
            {/* <button className="note-app__add-action">Add note</button> */}
            <button className="note-app__add-action" onClick={onAll}>All note</button>
            <button className="note-app__add-action" onClick={onActive}>Active Note</button>
            <button className="note-app__add-action" onClick={onArchived}>Archive Note</button>
            <h4>Tags</h4>
            <button className="note-app__add-action">Tag1</button>
            <button className="note-app__add-action">Tag2</button>
        </div>
    );
}

export default NoteSidebar;