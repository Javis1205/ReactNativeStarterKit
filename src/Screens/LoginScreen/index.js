import React from 'react';
import {
    View,
    Text,
    TouchableOpacity
} from 'react-native';
import {
    StackActions,
    NavigationActions
} from 'react-navigation';
class LoginScreen extends React.Component {
    gotoMain(){
        this.props.navigation.navigate('App')
    }
    render(){
        return(
            <View style={styles.container}>
                <TouchableOpacity
                    onPress={()=>{this.gotoMain()}}
                >
                    <Text>
                        LoginScreen
                    </Text>
                </TouchableOpacity>
            </View>
        )
    }
}
const styles = {
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
}
export default LoginScreen;