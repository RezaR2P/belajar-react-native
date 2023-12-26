import React from 'react';
import {Image, Text, TextInput, View} from 'react-native';

const App = () => {
  return (
    <View>
      <View style={{width: 80, height: 80, backgroundColor: 'black'}} />
      <Text>Reza</Text>

      <Text>Ramdan</Text>
      <Permana />
      <Img />
      <TextInput
        style={{borderWidth: 5, borderColor: 'blue', borderStyle: 'dotted'}}
      />
    </View>
  );
};

const Permana = () => {
  return <Text>Permana</Text>;
};

const Img = () => {
  return (
    <Image
      source={{uri: 'https://loremflickr.com/640/360'}}
      style={{width: 100, height: 100}}
    />
  );
};

export default App;
