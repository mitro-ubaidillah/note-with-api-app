import React from "react";
import NoteItem from "./NoteItem";

class NoteItemList extends React.Component{
    render(){
        return(
            this.props.notes.length > 0 ?
            <div className="note-list">
               
                    {/* <NoteSearch /> */}
                    {
                        this.props.notes.map((note) => (
                        <NoteItem 
                        key={note.id}
                        id={note.id}
                        archived={note.archived}
                        onDelete={this.props.onDelete}
                        onArchive={this.props.onArchive}
                        {...note} /> 
                        ))
                    }
            </div> : <p className="note-list__empty">Tidak ada catatan</p>
        );
    }
}

export default NoteItemList;