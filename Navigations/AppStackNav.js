import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Splash from '../Screens/Splash';
import BottomTab from './BottomTab';
<<<<<<< HEAD
import Home from '../Screens/HomeScreens/Home';
=======
>>>>>>> 82b3d9ac0503789985bd6b597a8263ae4dcd393b


const StackNavigation = createNativeStackNavigator();


const AppStackNav = () => {
    return (
        <NavigationContainer>
            <StackNavigation.Navigator>
<<<<<<< HEAD
                <StackNavigation.Screen name='Home' component={Home}
=======
                <StackNavigation.Screen name='Splash' component={Splash}
>>>>>>> 82b3d9ac0503789985bd6b597a8263ae4dcd393b
                    options={{ headerShown: false }} />
                <StackNavigation.Screen name='BottomTab' component={BottomTab}
                    options={{ headerShown: false }} />
            </StackNavigation.Navigator>
        </NavigationContainer>
    );
};

export default AppStackNav;