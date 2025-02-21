import * as React from 'react';
import {NavigationContainer} from "@react-navigation/native"
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


import Login from "./screens/Login"
import LoginAdmin from './screens/LoginAdmin';
import PassRec1 from './screens/PassRec1';
import PassRec2 from './screens/PassRec2';
import PassRec3 from './screens/PassRec3';
import Home from './screens/Home';
import Reserves from './screens/Reserves';
import Alerts from './screens/Alerts';
import User from './screens/User';
import EditUser from './screens/editUser';
import Bills from './screens/Bills';
import Packages from './screens/Packages';
import MyReserves from './screens/MyReserves';


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export default function MainContainer() {
  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen name="login" component={Login} options={{ headerShown: false }}/>
          <Stack.Screen name="loginAdmin" component={LoginAdmin} options={{ headerShown: false }}/>
          <Stack.Screen name="PassRec1" component={PassRec1} options={{ headerShown: false }}/>
          <Stack.Screen name="PassRec2" component={PassRec2} options={{ headerShown: false }}/>
          <Stack.Screen name="PassRec3" component={PassRec3} options={{ headerShown: false }}/>
          <Stack.Screen name="Home" component={homeTabs} options={{ headerShown: false }} />
          <Stack.Screen name="Bills" component={Bills} options={{ headerShown: false }} />
        </Stack.Navigator>
    </NavigationContainer>
  );
}

function homeTabs() {
  return(
    <Tab.Navigator 
      screenOptions={({ route }) => ({
        tabBarShowLabel: false,
        tabBarStyle: {
          position: 'absolute',
          backgroundColor: '#333333'
        },
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Reserves') {
            iconName = focused ? 'calendar' : 'calendar-outline';
          } else if (route.name === 'Alerts') {
            iconName = focused ? 'bell' : 'bell-outline';
          } else if (route.name === 'User') {
            iconName = focused ? 'account' : 'account-outline';
          }

          return <MaterialCommunityIcons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#ffffff',
      })}>
      
      <Tab.Screen name="Home" component={homeData} options={{ headerShown: false }}/>
      <Tab.Screen name="Reserves" component={reserveData} options={{ headerShown: false }}/>
      <Tab.Screen name="Alerts" component={Alerts} options={{ headerShown: false }}/>
      <Tab.Screen name="User" component={userData} options={{ headerShown: false }}/>

    </Tab.Navigator>
  )
}

function userData() {
  return (
        <Stack.Navigator initialRouteName="User">
          <Stack.Screen name="User" component={User} options={{ headerShown: false }}/>
          <Stack.Screen name="editUser" component={EditUser} options={{ headerShown: false }}/>
        </Stack.Navigator>
  );
}

function homeData() {
  return (
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={Home} options={{ headerShown: false }}/>
          <Stack.Screen name="Bills" component={Bills} options={{ headerShown: false }}/>
          <Stack.Screen name="Packages" component={Packages} options={{ headerShown: false }}/>
        </Stack.Navigator>
  );
}

function reserveData() {
  return (
        <Stack.Navigator initialRouteName="Reserves">
          <Stack.Screen name="Reserves" component={Reserves} options={{ headerShown: false }}/>
          <Stack.Screen name="MyReserves" component={MyReserves} options={{ headerShown: false }}/>
          <Stack.Screen name="Packages" component={Packages} options={{ headerShown: false }}/>
        </Stack.Navigator>
  );
}




