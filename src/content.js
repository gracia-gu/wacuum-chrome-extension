/*global chrome*/
/* src/content.js */
import React from 'react';
import ReactDOM from 'react-dom';
import Frame, { FrameContextConsumer }from 'react-frame-component';
import App from "./App";
class Main extends React.Component {
    render() {
        return (
            <Frame head={[<link type="text/css" rel="stylesheet" href={chrome.runtime.getURL("/static/css/content.css")} ></link>]}> 
               <FrameContextConsumer>
               {
                  ({document, window}) => {
                    return <App document={document} window={window} isExt={true}/> 
                  }
                }
                </FrameContextConsumer>
            </Frame>
        )
    }
}

const app = document.createElement('div');
app.id = "my-extension-root";
app.className = "sidebar"

document.body.appendChild(app);
ReactDOM.render(<Main />, app);

app.style.setProperty("right", "-360px")

chrome.runtime.onMessage.addListener(
   function(request, sender, sendResponse) {
      if( request.message === "clicked_browser_action") {
        toggle();
      }
   }
);

const toggle = () => {
  if (app.style.getPropertyValue("right") === "-360px"){
    app.style.setProperty("right", "0px");
  } else {
    app.style.setProperty("right", "-360px");
  }
}