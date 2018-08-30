import { createSwitchNavigator } from "react-navigation";
import LoadingScreen from "../Screens/LoadingScreen";
import LoginScreen from "../Screens/LoginScreen";

export default createSwitchNavigator(
    {
        LoginScreen: LoginScreen,
        LoadingScreen: LoadingScreen
    },
    {
        initialRouteName: "LoadingScreen"
    }
);
