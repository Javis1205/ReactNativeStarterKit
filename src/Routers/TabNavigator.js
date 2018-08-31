import { createTabNavigator } from "react-navigation";
import HomeScreen from "../Screens/HomeScreen";
import ProfileScreen from "../Screens/ProfileScreen";

export default createTabNavigator(
    {
        HomeTabScreen:{
            screen: HomeScreen
        },
        ProfileTabScreen:{
            screen: ProfileScreen
        }
    }
);
