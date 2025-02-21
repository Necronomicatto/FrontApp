import * as React from 'react';
import {Text, View, StyleSheet, SafeAreaView, ScrollView} from 'react-native';
import {Button, TextInput} from 'react-native-paper';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Calendar } from 'react-native-calendars';


export default function MyReserves({ navigation }) {
  return(
    <SafeAreaView style={styles.container}>
      <View style={styles.title}>
      <MaterialCommunityIcons
      name="arrow-left"
      size={40}
      style={styles.icon}
      onPress={() => navigation.navigate("Reserves")}
      />

    <Text style={styles.tit2}>
      datas reservada
    </Text>
    </View>

    <View style={{ width: "90%", marginTop: '40' }}>
      <Calendar
          current={'2024-04-29'} 
          markedDates={{
            '2024-04-29': { selected: true, marked: true, selectedColor: '#333333' }, 
          }}
          theme={{
            textSectionTitleColor: '#ffffff', // Days names row text color (Sunday, Monday, etc.)
            backgroundColor: '#333333',
            calendarBackground: 'white',
            arrowColor: 'black', // Month arrows color
            textDisabledColor: 'gray',
            textDayFontWeight: '500',
            textMonthFontWeight: 'bold',
            textDayHeaderFontWeight: 'bold', // Make days names bold
            textDayFontSize: 16,
            textMonthFontSize: 18,
            textDayHeaderFontSize: 14, // Adjust the size of days names row
          }}
          renderArrow={(direction) => (
            <Text style={{ fontSize: 14, color: 'black' }}>
              {direction === 'left' ? '-' : '+'}
            </Text>
          )} 
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
    marginTop: 25,
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
    alignSelf: 'flex-end',
    margin: 20
  }

})