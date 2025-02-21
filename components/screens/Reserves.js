import * as React from 'react';
import {Text, View, StyleSheet, SafeAreaView, Pressable} from 'react-native';
import {Button, TextInput} from 'react-native-paper';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default function Reserves({ navigation }) {
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
      Reservas
    </Text>
    </View>

    <Pressable onPress={() => navigation.navigate("MyReserves")}>
      <View style={styles.box}>
        <Text style={styles.tit1}>
          minhas{"\n"}reservas
        </Text>
        <MaterialCommunityIcons
          name="calendar-blank-multiple"
          size={40}
          style={styles.icon2}
          color="#ffffff"
        />
      </View>
    </Pressable>

    <View style={styles.box}>
      <Text style={styles.tit1}>
        churrasqueira
      </Text>
      <MaterialCommunityIcons
        name="grill"
        size={40}
        style={styles.icon2}
        color="#ffffff"
        />
    </View>

    <View style={styles.box}>
      <Text style={styles.tit1}>
        quadra de{"\n"}futsal
      </Text>
      <MaterialCommunityIcons
        name="soccer"
        size={40}
        style={styles.icon2}
        color="#ffffff"
        />
    </View>

    <View style={styles.box}>
      <Text style={styles.tit1}>
        salão de{"\n"}festas
      </Text>
      <MaterialCommunityIcons
        name="party-popper"
        size={40}
        style={styles.icon2}
        color="#ffffff"
        />
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
    height:120,
    margin: 5,
    marginTop: 30,
    alignItems: 'center',
    justifyContent: 'space-between'
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
    alignSelf: 'center',
    margin: 20
  }

})