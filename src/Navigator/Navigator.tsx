import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Form from '../containers/Form/Form';
import List from '../containers/List/List';
import colors from '../constants/colors';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function TabBar() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: colors.red,
        inactiveTintColor: colors.inactiveIconColor,
      }}>
      <Tab.Screen name={'SignUp'} component={Form} />
      <Tab.Screen name={'List'} component={List} />
    </Tab.Navigator>
  );
}

export default class Navigator extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="SignUp" headerMode="none">
          <Stack.Screen name={'SignUp'} component={TabBar} />
          <Stack.Screen name={'List'} component={List} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
