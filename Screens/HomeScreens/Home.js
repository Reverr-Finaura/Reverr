import { View, Text, StyleSheet } from 'react-native';
<<<<<<< HEAD
import React from 'react';
import Header from '../../Componants/HomeScreenComponants/Header';
import AppColors from '../../Constaint/AppColors';
import { AuthContext } from '../../Navigations/AuthProvider';
import CustomBtn from '../../Componants/CustomBtn';

const Home = () => {

    const {user, logout } = React.useContext(AuthContext);
    return (
        <View style={styles.screen}>
            <Header
               
            />
             <CustomBtn
                        Title="Logout"
                        onPress={() => {
                            logout();
                        }}
                        style={{ marginTop: 10 }}
            />
            <Text>Home</Text>
=======
import React, { useContext } from 'react';
import Header from '../../Componants/HomeScreenComponants/Header';
import AppColors from '../../Constaint/AppColors';
import { AuthContext } from '../../Navigations/AuthProvider';

const Home = () => {

    const { logout } = useContext(AuthContext);
    return (
        <View style={styles.screen}>
            <Header
            />
            <Text></Text>
>>>>>>> 82b3d9ac0503789985bd6b597a8263ae4dcd393b
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: AppColors.primarycolor
    }
});

export default Home;
