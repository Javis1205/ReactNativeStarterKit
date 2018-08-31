import React from 'react';
import {
    View,
    ActivityIndicator
} from 'react-native';
import {
    ImageCached
} from '../../Components';
import {
    NavigationActions,
    StackActions
} from 'react-navigation';
class LoadingScreen extends React.Component {
    componentWillMount(){
        this.gotoLogin();
    }
    gotoLogin(){
        const resetAction = StackActions.reset({
            index: 0,
            actions: [
                NavigationActions.navigate({ routeName: 'LoginScreen' }),
            ],
        });
        this.props.navigation.dispatch(resetAction);
    }
    render(){
        return(
            <View style={styles.container}>
                <ActivityIndicator
                    size='large'
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