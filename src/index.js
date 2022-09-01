import React from "react";
import {createRoot} from "react-dom/client";
import NoteApp from "./components/NoteApp";

//import style
import './style/style.css';

const root = createRoot(document.getElementById('root'));
root.render(<NoteApp />);