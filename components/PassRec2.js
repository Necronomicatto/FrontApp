import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import {Button, TextInput} from 'react-native-paper';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default function PassRec2() {
  const [text, setText] = React.useState('');
  const [hidePass, setHidePass] = React.useState(true);
  const [key, setKey] = React.useState('');
  return(
    <View style={styles.container}>
      <MaterialCommunityIcons
      name="arrow-left"
      size={40}
      style={styles.icon}
      />

      <Text style={styles.titulo1}>
        REDEFINIÇÃO DE SENHA
      </Text>

      <TextInput
        mode= "outlined"
        style={styles.inputContainerStyle}
        label="codigo"
        activeOutlineColor="#333333"
        outlineColor="#333333"
        value={text}
        onChangeText={(text) => setText(text)}></TextInput>

      <Button 
        mode="contained"
        color="#333333"
        style={styles.button}>
        confirmar
      </Button>

      <Button 
        mode="outlined"
        color="#333333"
        style={styles.button2}>
        re-enviar <br /> codigo
      </Button>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    alignItems: 'center',
    padding: 24,
    flexDirection: 'column',
    flex: '1',
  },
  
  titulo1: {
    margin:24,
    marginTop: 50,
    fontSize:24,
    fontWeight: 'bold',
    textAlign: 'Center',
    color: '#333333'
  },

  button: {
    width:114,
    height:45,
    marginTop: 70,
    fontSize: 14,
    alignItems: 'center'
    
  },

  button2: {
    width:114,
    height:45,
    marginTop: 50,
    fontSize: 14,
    alignItems: 'center'
    
  },

  inputContainerStyle: {
    margin: 5,
    marginTop: 70,
    width: 200,
    height: 40
  },

  icon: {
    alignSelf: 'flex-start',
    marginTop: 5
  }

})