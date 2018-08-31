import React from 'react';
import {
    View,
    Text
} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
class LoadingScreen extends React.Component {
    render(){
        return(
            <View style={styles.container}>
                <Text>
                    LoadingScreen
                </Text>
                <Icon 
                    name="rocket" 
                    size={30} 
                    color="#900" 
                />
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
export default LoadingScreen;