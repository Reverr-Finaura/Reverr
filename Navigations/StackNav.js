import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Splash from '../Screens/Splash';
import LoginScreen from '../Screens/LoginScreen';
import SignupScreen from '../Screens/SignupScreen';
import BottomTab from './BottomTab';
import UserSelectcreen from '../Screens/UserSelectcreen';
import ForgotPassword from '../Screens/ForgotPasswordScreens/ForgotPassword';
import OtpScreen from '../Screens/ForgotPasswordScreens/OtpScreen';
import ResetPassword from '../Screens/ForgotPasswordScreens/ResetPassword';
<<<<<<< HEAD
import emailVerify from '../Screens/emailVerify';
=======
>>>>>>> 82b3d9ac0503789985bd6b597a8263ae4dcd393b

const StackNavigation = createNativeStackNavigator();

const StackNav = () => {
    return (
        <NavigationContainer>
            <StackNavigation.Navigator>
                <StackNavigation.Screen name='Splash' component={Splash}
                    options={{ headerShown: false }} />
                <StackNavigation.Screen name='Login' component={LoginScreen}
                    options={{ headerShown: false }} />
                <StackNavigation.Screen name='UserType' component={UserSelectcreen}
                    options={{ headerShown: false }} />
                <StackNavigation.Screen name='Signup' component={SignupScreen}
                    options={{ headerShown: false }} />
                <StackNavigation.Screen name='Forgotp' component={ForgotPassword}
                    options={{ headerShown: false }} />
                <StackNavigation.Screen name='Otp' component={OtpScreen}
                    options={{ headerShown: false }} />
<<<<<<< HEAD
                <StackNavigation.Screen name='emailVerify' component={emailVerify}
                    options={{ headerShown: false }} />
=======
>>>>>>> 82b3d9ac0503789985bd6b597a8263ae4dcd393b
                <StackNavigation.Screen name='Reset' component={ResetPassword}
                    options={{ headerShown: false }} />
                <StackNavigation.Screen name='home' component={BottomTab}
                    options={{ headerShown: false }} />
            </StackNavigation.Navigator>
        </NavigationContainer>
    );
};

export default StackNav;