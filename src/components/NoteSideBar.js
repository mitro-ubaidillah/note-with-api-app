import React from "react";

const NoteSidebar = () => {
    return(
        <div className="note-sidebar">
            <button className="note-app__add-action">All note</button>
            <button className="note-app__add-action">Archive Note</button>
            <h4>Tags</h4>
            <button className="note-app__add-action">Tag1</button>
            <button className="note-app__add-action">Tag2</button>
        </div>
    );
}

export default NoteSidebar;