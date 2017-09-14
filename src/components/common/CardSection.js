// import required libraries and components
import React from 'react';
import { View } from 'react-native';

// make a component
const CardSection = (props) => {

  return (
    <View style={styles.containerStyle}>
      {props.children}
    </View>
  );
};

// component styles
const styles = {
  containerStyle: {
    borderBottomWidth: 1,
    padding: 5,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    position: 'relative',
    borderColor: '#ddd'
  }
};

// make the component available to other parts of the app
export { CardSection };
