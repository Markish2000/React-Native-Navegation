import React from 'react';
import {Text, View, Button} from 'react-native';
import {StackScreenProps} from '@react-navigation/stack';
import {styles} from '../theme/appTheme';

interface Props extends StackScreenProps<any, any> {}

export const Page3Screen = ({navigation}: Props) => {
  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>Page3Screen</Text>
      <Button title="Regresar" onPress={() => navigation.pop()} />
      <Button title="Ir a la página 1" onPress={() => navigation.popToTop()} />
    </View>
  );
};
