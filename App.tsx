import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Text, View} from 'react-native';
// import {StackNavigator} from './src/navigator/StackNavigator';
// import {BasicSideMenu} from './src/navigator/BasicSideMenu';

const App = () => {
  return (
    <NavigationContainer>
      {/* <StackNavigator /> */}
      <View>
        <Text>Hola</Text>
      </View>
      {/* <BasicSideMenu /> */}
    </NavigationContainer>
  );
};

export default App;
