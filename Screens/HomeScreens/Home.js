import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import Header from '../../Componants/HomeScreenComponants/Header';
import AppColors from '../../Constaint/AppColors';
import { AuthContext } from '../../Navigations/AuthProvider';

const Home = () => {

    const { logout } = useContext(AuthContext);
    return (
        <View style={styles.screen}>
            <Header
                onPress={() => {
                    logout();
                }}
            />
            <Text></Text>
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
