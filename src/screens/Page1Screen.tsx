import React, {useEffect} from 'react';
import {Text, View, Button, TouchableOpacity} from 'react-native';
import {styles} from '../theme/appTheme';
import {DrawerScreenProps} from '@react-navigation/drawer';

interface Props extends DrawerScreenProps<any, any> {}

export const Page1Screen = ({navigation}: Props) => {
  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <Button title="Menú" onPress={() => navigation.toggleDrawer()} />
      ),
    });
  }, []);

  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>Page1Screen</Text>

      <Button
        title="Ir página 2"
        onPress={() => navigation.navigate('Page2Screen')}
      />

      <Text>Navegación con argumentos</Text>

      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity
          style={{...styles.bigButton, backgroundColor: '#5856D6'}}
          onPress={() =>
            navigation.navigate('PersonaScreen', {id: 1, name: 'Pedro'})
          }>
          <Text style={styles.bigButtonText}>Pedro</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{...styles.bigButton, backgroundColor: '#FF9427'}}
          onPress={() =>
            navigation.navigate('PersonaScreen', {id: 2, name: 'Maria'})
          }>
          <Text style={styles.bigButtonText}>Maria</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
