import { createStackNavigator } from "react-navigation";
import LoadingScreen from "../Screens/LoadingScreen";
import LoginScreen from "../Screens/LoginScreen";

export default createStackNavigator(
    {
        LoginScreen: LoginScreen,
        LoadingScreen: LoadingScreen
    },
    {
        initialRouteName: "LoadingScreen",
        headerMode: 'none',
    }
);
