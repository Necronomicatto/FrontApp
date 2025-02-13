import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import Login from './components/Login';
import LoginAdmin from './components/LoginAdmin';
import PassRec1 from './components/PassRec1';
import PassRec2 from './components/PassRec2';
import PassRec3 from './components/PassRec3';
import Home from './components/Home';

import {createStackNavigator} from '@react-navigation/stack';

const StackInit = createStackNavigator(); 

function HomeStack({navigation}){
  return (
    <StackInit.Navigator initialRouteName="Home">
      <StackInit.Group
        screenOptions={{presentation: 'modal', headerShown: false}}>
        <StackInit.Screen name="Home" component={Home} />
      </StackInit.Group>
    </StackInit.Navigator>
  )
}

function BookingStack({navigation0}) {
  return (
    <StackInit.Navigator initialRouteName="Booking">
      <StackInit.Group
        screenOptions={{ presentation: 'modal', headerShown: false}}>
        <StackInit.Screen name="Home" component={Home} />
      </StackInit.Group>
    </StackInit.Navigator>
  )
}

const Tab = createMaterialBottomTabNavigator();
function Tabs({navigation}) {
  return(
    <Tab.Navigator
      initialRouteName="Home"
      barStyle={{backgroundColor: '#333333'}}>

      <Tab.Screen 
        name="Home" 
        component={HomeStack}
        options={{
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="home" color={'white'} size={40} />
          ),
        }}
      />

    </Tab.Navigator>
  );
}

function StackInitial({ navigation }) {
  return (
    <StackInit.Navigator initialRouteName="Tabs">
      <StackInit.Group
        screenOptions={{ presentation: 'modal', headerShown: false }}>
     
        <StackInit.Screen name="Tabs" component={Tabs} />
      </StackInit.Group>
    </StackInit.Navigator>
  );
}

export default function Routes({ navigation }) {
  return <StackInitial />;
}
