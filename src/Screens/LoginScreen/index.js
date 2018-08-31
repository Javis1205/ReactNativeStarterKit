import React from 'react';
import {
    View,
    Text
} from 'react-native';
class LoginScreen extends React.Component {
    render(){
        return(
            <View style={styles.container}>
                <Text>
                    LoginScreen
                </Text>
                
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