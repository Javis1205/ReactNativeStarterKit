import { createSwitchNavigator } from "react-navigation";
import AuthNavigator from "./AuthNavigator";
import TabNavigator from "./TabNavigator";

export default createSwitchNavigator(
    {
        Auth: AuthNavigator,
        App: TabNavigator
    },
    {
        initialRouteName: "Auth",
    }
);
