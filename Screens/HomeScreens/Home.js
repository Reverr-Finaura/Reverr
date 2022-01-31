import { View, Text, StyleSheet } from 'react-native';
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
