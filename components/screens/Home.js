import * as React from 'react';
import {Text, View, SafeAreaView, StyleSheet, ScrollView, Pressable} from 'react-native';
import {Button, TextInput} from 'react-native-paper';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default function Home({ navigation }) {
  return(
    <SafeAreaView style={styles.container}>
      <MaterialCommunityIcons
      name="logout"
      size={40}
      style={styles.icon}
      />

    <Text style={styles.tit1}>
      Notificaçoes recentes
    </Text>

    <ScrollView horizontal={true}>
      <View style={styles.box}>
      </View>
      <View style={styles.box}>
      </View>
    </ScrollView>

    <Text style={styles.tit1}>
      avisos do condominio
    </Text>

    <ScrollView horizontal={true}>
      <View style={styles.box}>
      </View>
      <View style={styles.box}>
      </View>
    </ScrollView>

    <Text style={styles.tit1}>
      avisos do condominio
    </Text>

    <ScrollView horizontal={true}>
    <Pressable onPress={() => navigation.navigate("Bills")}>
      <View style={styles.box2}>
      <Text style={styles.tit2}>
        contas
      </Text>
        <MaterialCommunityIcons
        name="file-account"
        size={40}
        style={styles.icon2}
        color="#ffffff"
        />
      </View>
    </Pressable>

    <Pressable onPress={() => navigation.navigate("Packages")}>
      <View style={styles.box2}>
      <Text style={styles.tit2}>
        encomenda
      </Text>
        <MaterialCommunityIcons
        name="package-variant-closed"
        size={40}
        style={styles.icon2}
        color="#ffffff"
        />
      </View>
    </Pressable>

    <Pressable onPress={() => navigation.navigate("Reserves")}>
      <View style={styles.box2}>
      <Text style={styles.tit2}>
        reservas
      </Text>
        <MaterialCommunityIcons
        name="calendar"
        size={40}
        style={styles.icon2}
        color="#ffffff"
        />
      </View>
    </Pressable>

    </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    justifyContent: 'center',
    padding: 24,
    flexDirection: 'column',
    flex: 1,
  },

  box: {
    backgroundColor: '#333333',
    borderRadius: 10, // Combines all four radius properties
    borderColor: '#333333', // React Native uses a single borderColor property
    width:248,
    height:106,
    margin: 5, // Since all border widths are 0
  },

  box2: {
    backgroundColor: '#333333',
    borderRadius: 10, // Combines all four radius properties
    borderColor: '#333333', // React Native uses a single borderColor property
    width:117,
    height:94,
    margin: 5, // Since all border widths are 0
  },

  tit1: {
    margin: 5,
    marginTop: 35,
    fontSize: 18,
  },

  tit2: {
    margin: 8,
    fontSize: 18,
    color: '#ffffff'
  },

  icon: {
    alignSelf: 'flex-start',
    margin: 8
  },

  icon2: {
    alignSelf: 'flex-end',
    marginTop: 5
  }

})