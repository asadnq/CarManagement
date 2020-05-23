import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Icon from 'react-native-vector-icons/FontAwesome';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import HomeScreen from './HomeScreen';
import {AddNewProspectScreen} from './AddNewProspectScreen';
import {ListProspectScreen} from './ListProspectScreen';
import {Alert} from 'react-native';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, color, size}) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = 'ios-home';
            } else if (route.name === 'AddProspect') {
              iconName = 'md-person-add'
            } else if(route.name ==='ListProspect') {
              iconName = 'ios-list';
            } 
            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: '#2094f0',
          inactiveTintColor: 'gray',
        }}>
        <Tab.Screen name="AddProspect" component={AddNewProspectScreen} />
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="ListProspect" component={ListProspectScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
