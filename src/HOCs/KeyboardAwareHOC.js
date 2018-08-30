// @flow
import React, { Component } from 'react';
import { 
  LayoutAnimation, 
  Keyboard, 
  Platform 
} from 'react-native';

export default (Comp: ReactClass<*>) => {
  return class KeyboardAware extends Component {
    state = { keyboardOn: false };
    keyboardWillShowSub: Keyboard.addListener;
    keyboardWillHideSub: Keyboard.addListener;
    componentWillMount() {
      this.keyboardWillShowSub = Keyboard.addListener(
        Platform.OS === 'ios' ? 'keyboardWillShow' : 'keyboardDidShow',
        event => {
            this.keyboardHeight = event.endCoordinates.height;
            this.setState({ keyboardOn: true });
        }
      );
      this.keyboardWillHideSub = Keyboard.addListener(
        Platform.OS === 'ios' ? 'keyboardWillHide' : 'keyboardDidHide',
        event => {
          this.setState({ keyboardOn: false });
        }
      );
    }
    componentWillUpdate() {
      !this.props.noAnimation && LayoutAnimation.easeInEaseOut();
    }
    componentWillUnmount() {
      this.keyboardWillShowSub && this.keyboardWillShowSub.remove();
      this.keyboardWillHideSub && this.keyboardWillHideSub.remove();
    }
    render() {
      const {
          autoMove,
        styleDuringKeyboardShow,
        style,
        children,
        hideOnKeyboard,
        ...props
      } = this.props;
      let newStyle = styleDuringKeyboardShow;
      if (autoMove) {
          newStyle = {
              position: 'absolute',
              bottom: this.keyboardHeight
          }
      }
      if (this.state.keyboardOn && hideOnKeyboard) return null;
      return (
        <Comp
          style={[style, this.state.keyboardOn && newStyle]}
          {...props}
        >
          {children}
        </Comp>
      );
    }
  };
};
