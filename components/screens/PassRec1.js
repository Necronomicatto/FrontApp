import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import {Button, TextInput} from 'react-native-paper';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default function PassRec1({ navigation}) {
  const [text, setText] = React.useState('');
  const [hidePass, setHidePass] = React.useState(true);
  const [key, setKey] = React.useState('');
  return(
    <View style={styles.container}>
      <MaterialCommunityIcons
      name="close"
      size={40}
      style={styles.icon}
      onPress={() => navigation.navigate("login")}
      />

      <Text style={styles.titulo1}>
        REDEFINIÇÃO DE SENHA
      </Text>

      <TextInput
        mode= "outlined"
        style={styles.inputContainerStyle}
        label="email"
        activeOutlineColor="#333333"
        outlineColor="#333333"
        value={text}
        onChangeText={(text) => setText(text)}></TextInput>

      <Button 
        mode="contained"
        color="#333333"
        style={styles.button}
        onPress={() => navigation.navigate("PassRec2")}>
        enviar codigo
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
    flex: 1,
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
    width:160,
    height:50,
    marginTop: 70,
    fontSize: 14,
    flexWrap: 'wrap'
    
  },

  inputContainerStyle: {
    margin: 5,
    marginTop: 70,
    width: 200,
    height: 40
  },

  icon: {
    alignSelf: 'flex-end',
    marginTop: 5
  }

})