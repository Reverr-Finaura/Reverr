import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../Screens/Home';


const StackNavigation = createNativeStackNavigator();


const AppStackNav = () => {
    return (
        <NavigationContainer>
            <StackNavigation.Navigator>
                <StackNavigation.Screen name='Home' component={Home}
                    options={{ headerShown: false }} />
            </StackNavigation.Navigator>
        </NavigationContainer>
    );
};

export default AppStackNav;