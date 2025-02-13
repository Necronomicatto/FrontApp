import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import {Button, TextInput} from 'react-native-paper';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default function LoginAdmin() {
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
        LOGIN ADMINISTRAÇÃO
      </Text>

      <TextInput
        mode= "outlined"
        style={styles.inputContainerStyle}
        label="email"
        activeOutlineColor="#333333"
        outlineColor="#333333"
        value={text}
        onChangeText={(text) => setText(text)}></TextInput>

      <TextInput
        mode= "outlined"
        style={styles.inputContainerStyle}
        label="senha"
        activeOutlineColor="#333333"
        outlineColor="#333333"
        secureTextEntry={hidePass ? true:false}
        value={key}
        onChangeText={(key) => setKey(key)}/>

      <Button 
        mode="contained"
        color="#333333"
        style={styles.button}>
        ENTRAR
      </Button>

      <Text style={styles.subt}>
        esqueci a senha
      </Text>
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
    marginTop: 80,
    fontSize:24,
    fontWeight: 'bold',
    textAlign: 'Center',
    color: '#333333'
  },

  button: {
    width:100,
    height:40,
    marginTop: 50
  },

  inputContainerStyle: {
    margin: 5,
    width: 200,
    height: 40
  },

  subt: {
    margin: 40,
    fontSize: 14,
  },

  icon: {
    alignSelf: 'flex-start'
  }
})