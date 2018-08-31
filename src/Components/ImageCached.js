import {CustomCachedImage} from "react-native-img-cache";
import {
    Image
} from 'react-native';
import React from 'react';
import PropTypes from "prop-types";

export default class ImageCached extends React.PureComponent {
    static propTypes = {
        url: PropTypes.string,
    }
    static defaultProps = {
    
    }
    render(){
        return(
            <CustomCachedImage
                component={Image}
                source={{ uri: this.props.url }}
                indicator={null}
                {...this.props}
            />
        )
    }
}