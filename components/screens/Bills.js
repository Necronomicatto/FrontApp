import * as React from 'react';
import {Text, View, StyleSheet, SafeAreaView, ScrollView} from 'react-native';
import {Button, TextInput} from 'react-native-paper';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default function Bills({ navigation }) {
  return(
    <SafeAreaView style={styles.container}>
      <View style={styles.title}>
      <MaterialCommunityIcons
      name="arrow-left"
      size={40}
      style={styles.icon}
      onPress={() => navigation.navigate("Home")}
      />

    <Text style={styles.tit2}>
      Contas
    </Text>
    </View>

    <View style={styles.box}>
      <Text style={styles.tit1}>
        condominio
      </Text>
    </View>

    <View style={styles.box}>
     <Text style={styles.tit1}>
        reservas
      </Text>
    </View>

    <View style={styles.box}>
     <Text style={styles.tit1}>
        taxa extra
      </Text>
    </View>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    alignItems: 'center',
    padding: 24,
    flexDirection: 'column',
    flex: 1,
  },

  title: {
    flexDirection: 'row',
    //justifyContent: 'flex-center',
    width: '100%',
    alignItems: 'center'
  },

  box: {
    backgroundColor: '#333333',
    flexDirection: 'row',
    borderRadius: 10, 
    borderColor: '#333333',
    width:350,
    height:150,
    margin: 5,
    marginTop: 25,
    alignItems: 'center',
    justifyContent: 'center'
  },

  tit1: {
    margin: 10,
    fontSize: 28,
    color: '#ffffff'
  },

  tit2: {
    textAlign: 'flex-center', // Centers the text inside the Text component
    fontSize: 24, 
  },

  icon: {
    alignSelf: 'flex-start',
    margin: 8
  },

  icon2: {
    alignSelf: 'flex-end',
    margin: 20
  }

})