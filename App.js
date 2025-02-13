import { Text, SafeAreaView, StyleSheet } from 'react-native';
import Routes from './routes';
import {NavigationContainer} from '@react-navigation/native';

// You can import supported modules from npm
import { Card } from 'react-native-paper';

// or any files within the Snack
import Home from './components/Home';

export default function App() {
  return (
    <NavigationContainer>
      <Routes/>
    </NavigationContainer>
    //<SafeAreaView>
    //<Card style={styles.container}>
    //  <Home />
    //</Card>
    //</SafeAreaView>
  );
}

//const styles = StyleSheet.create({
//  container: {
//    flex: 1,
//    justifyContent: 'center',
//    backgroundColor: '#ecf0f1',
//    padding: 8,
//  },
//});
