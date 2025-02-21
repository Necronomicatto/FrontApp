import * as React from 'react';
import {Text, View, StyleSheet, SafeAreaView, ScrollView} from 'react-native';
import {Button, TextInput} from 'react-native-paper';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default function EditUser({ navigation }) {
  const [text, setText] = React.useState('');
  return(
    <SafeAreaView style={styles.container}>
      <View style={styles.title}>
      <MaterialCommunityIcons
      name="arrow-left"
      size={40}
      style={styles.icon}
      onPress={() => navigation.navigate("User")}
      />

    <Text style={styles.tit2}>
      Atualizar Dados
    </Text>
    </View>

    <Text style={styles.tit1}>
      nome
    </Text>

    <TextInput
        mode= "outlined"
        style={styles.inputContainerStyle}
        label="joão da silva"
        activeOutlineColor="#333333"
        outlineColor="#333333"
        value={text}
        onChangeText={(text) => setText(text)}></TextInput>

    <Text style={styles.tit1}>
      cpf
    </Text>

    <TextInput
        mode= "outlined"
        style={styles.inputContainerStyle}
        label="123.456.789-10"
        activeOutlineColor="#333333"
        outlineColor="#333333"
        value={text}
        onChangeText={(text) => setText(text)}></TextInput>
      
    <Text style={styles.tit1}>
      email
    </Text>

    <TextInput
        mode= "outlined"
        style={styles.inputContainerStyle}
        label="joao.silva@hotmail.com"
        activeOutlineColor="#333333"
        outlineColor="#333333"
        value={text}
        onChangeText={(text) => setText(text)}></TextInput>

    <Text style={styles.tit1}>
      celular
    </Text>

    <TextInput
        mode= "outlined"
        style={styles.inputContainerStyle}
        label="(12) 91234-5678"
        activeOutlineColor="#333333"
        outlineColor="#333333"
        value={text}
        onChangeText={(text) => setText(text)}></TextInput>

    <Text style={styles.tit1}>
      endereço
    </Text>

    <TextInput
        mode= "outlined"
        style={styles.inputContainerStyle}
        label="Quadra 1 Rua 2 Casa 3"
        activeOutlineColor="#333333"
        outlineColor="#333333"
        value={text}
        onChangeText={(text) => setText(text)}></TextInput>
    
    <TextInput
        mode= "outlined"
        style={styles.inputContainerStyle}
        label="Bloco B Apartamento 101"
        activeOutlineColor="#333333"
        outlineColor="#333333"
        value={text}
        onChangeText={(text) => setText(text)}></TextInput>

    <Button 
        mode="contained"
        color="#333333"
        style={styles.button}
        onPress={() => navigation.navigate("User")}>
        confirmar
      </Button>

    
    </SafeAreaView>
    
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    alignItems: 'flex-start',
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


  tit1: {
    margin: 10,
    marginBottom: 1,
    fontSize: 20,
    color: '#333333'
  },

  tit2: {
    textAlign: 'flex-center', // Centers the text inside the Text component
    fontSize: 24, 
  },

  icon: {
    alignSelf: 'flex-start',
    margin: 8
  },

  inputContainerStyle: {
    margin: 5,
    marginTop: 1,
    width: 400,
    height: 40
  },

  button: {
    width:150,
    height:53,
    marginTop: 50,
    alignSelf: 'center'
  },

})