import React from 'react';
import {
  View, 
  Text,
  Image,
  Button,
  Alert
} from 'react-native';

import {launchCamera,launchImageLibrary} from 'react-native-image-picker';

export default class App extends React.Component {

  handleChoosePhoto_1 = () => {
    let options = {};
    launchImageLibrary(options, response => {
      console.log({ response });
      if (response.didCancel) {
        console.log('User cancelled photo picker');
        Alert.alert('You did not select any image');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        let source = { uri: response.uri };
        console.log({ source });
      }
    });
  }

  render() {
    return (
      <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
          <Button title="launch Image Library" onPress={this.handleChoosePhoto_1}/>
      </View>
    );
  }
};