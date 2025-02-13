import * as React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {Button, TextInput} from 'react-native-paper';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default function Home() {
  return(
    <View style={styles.container}>
      <MaterialCommunityIcons
      name="logout"
      size={40}
      style={styles.icon}
      />

    <Text style={styles.tit1}>
      Notificaçoes recentes
    </Text>


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    //alignItems: 'center',
    padding: 24,
    flexDirection: 'column',
    flex: '1',
  },

  tit1: {
    margin: 5,
    marginTop: 40,
    fontSize: 18,
  },

  icon: {
    alignSelf: 'flex-start',
    marginTop: 5
  }

})