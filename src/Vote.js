import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faThumbsUp, faThumbsDown } from "@fortawesome/free-solid-svg-icons";

export default class Vote extends Component {

	constructor(props) {
        super(props);
        this.state = {
            thumbUpCount: 0,
            thumbDownCount: 0
        };
    }

	// setThumbUpCount() {
    //     this.setState({
    //         thumbUpCount: this.state.thumbUpCount + 1
    //     })
    // }

	// setThumbDownCount() {
    //     this.setState({
    //         thumbDownCount: this.state.thumbDownCount + 1
    //     })
    // }

	render() {
		return (
			<div className="vote-buttons">
				<button className="btn" id="btn-like">
					Yay!
					<FontAwesomeIcon icon={faThumbsUp} color="green"/>
					{/* {this.state.thumbUpCount} */}
				</button>
				<button className="btn" id="btn-dislike">
					Meh.
					<FontAwesomeIcon icon={faThumbsDown} color="red"/>
					{/* {this.state.thumbDownCount} */}
				</button>
			</div>
		)
    }
}
