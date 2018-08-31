import React from 'react';
import {
    View,
    Text
} from 'react-native';
import {
    ImageCached
} from '../../Components'
import Icon from 'react-native-vector-icons/dist/FontAwesome';
class LoadingScreen extends React.Component {
    render(){
        return(
            <View style={styles.container}>
            
                <Text>
                    LoadingScreen222
                </Text>
                <Icon 
                    name="rocket" 
                    size={30} 
                    color="#900" 
                />
                <ImageCached
                    style={{
                        height:100,
                        width:100
                    }}
                    url={'https://anhdephd.com/wp-content/uploads/2017/04/tai-hinh-anime-cute-de-thuong-cho-may.jpg'}
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