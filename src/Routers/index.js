import React, { Component } from "react";
import RootNavigator from "./RootNavigator";
import { Root } from "native-base";

export default class App extends Component {
    render() {
        return (
            <Root>
                <RootNavigator/>
            </Root>
        );
    }
}

