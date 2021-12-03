import React from "react";
import Form from "./Form";
import Vote from "./Vote";
import CommentSection from "./CommentSection";
import "./App.css";

function App() {
    return(
        <div className="sidebar">
            <div className="left-col">
                <i className="arrow left"></i>
            </div>
            {/* if not logged in, render form */}
            {/* <div className="right-col"><Form /></div> */}
            {/* if logged in, render comments */}
            <div className="right-col">
                <div className="container">
                    <Vote />
                    <CommentSection />
                </div>
            </div>
        </div>
    )
}

export default App;

