import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ServicesScreen from '../screens/ServicesScreen';
import NavBar from '../../../shared/components/NavBar';

export type ServicesStackParamList = {
  Services: undefined;
};

const Home = createNativeStackNavigator<ServicesStackParamList>();

const ServicesNavigator = () => {
  return (
    <Home.Navigator
      screenOptions={{
        header: props => <NavBar {...props} />,
      }}>
      <Home.Screen name="Services" component={ServicesScreen} />
    </Home.Navigator>
  );
};

export default ServicesNavigator;
