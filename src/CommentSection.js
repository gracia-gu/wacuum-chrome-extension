import React, { Component } from "react";
import CommentBox from "./CommentBox";
import Comment from "./Comment";

let commentCounter = 1;
class CommentSection extends Component {
    constructor() {
        super();
        this.state = {
            commentValue: "",
            commentLine: [{ commentId: "", text: "" }],
        };
    }

    handleCommentValue = (e) => {
        this.setState({
            commentValue: e.target.value,
        })
    }

    setCommentLine = () => {
        this.setState({
            commentLine: [
                ...this.state.commentLine,
                { commentId: commentCounter++, text: this.state.commentValue }],
            commentValue: "",
        });
    }

    submitCommentLine = (e) => {
        e.preventDefault();
        this.setCommentLine();
    }

    enterCommentLine = (e) => {
        if (e.charCode === 13) {
            this.setCommentLine();
        }
    }


    render() {
        return (
                <CommentBox
                    commentValue={this.state.commentValue}
                    handleCommentValue={this.handleCommentValue}
                    enterCommentLine={this.enterCommentLine}
                    submitCommentLine={this.submitCommentLine}
                />
        )
    }
}

export default CommentSection;