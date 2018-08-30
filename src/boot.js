import React, { Component } from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import App from "./Routers";
import getTheme from "./Components/NativeBaseTheme/components";
import material from "./Components/NativeBaseTheme/variables/material";
import {
  store,
  persistor
} from './Redux/store';
import { StyleProvider } from "native-base";

export default class Root extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <StyleProvider style={getTheme(material)}>
        <Provider store={store}>
          <PersistGate persistor={persistor}>
            <App/>
          </PersistGate>
        </Provider>
      </StyleProvider>
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

