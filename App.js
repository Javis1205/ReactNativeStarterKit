import React, { Component } from "react";
import App from "./src/Routers/index";

export default class Root extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <App/>
        );
    }
}

global.XMLHttpRequest = global.originalXMLHttpRequest ?
    global.originalXMLHttpRequest :
    global.XMLHttpRequest;
global.FormData = global.originalFormData ?
    global.originalFormData :
    global.FormData;

fetch; // Ensure to get the lazy property

if (window.__FETCH_SUPPORT__) { // it's RNDebugger only to have
    window.__FETCH_SUPPORT__.blob = false;
} else {
    global.Blob = global.originalBlob ?
        global.originalBlob :
        global.Blob;
    global.FileReader = global.originalFileReader ?
        global.originalFileReader :
        global.FileReader;
}