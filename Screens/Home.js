import { View, Text, StyleSheet, Image, Dimensions } from 'react-native';
import React from 'react';
import AppColors from '../Constaint/AppColors';
import { useNavigation } from '@react-navigation/native';

const Height = Dimensions.get("window").height;
const Width = Dimensions.get("window").width;

const Home = () => {

    const navigation = useNavigation();


    return (
        <View style={styles.Screen}>
            <View style={styles.container}>
                <Image style={styles.Logo} source={require("../assets/Images/logo.png")} />
                <View style={styles.textContainer}>
                    <Text style={styles.logoText}>Home</Text>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    Screen: {
        flex: 1,
        backgroundColor: AppColors.primarycolor
    },
    container: {
        alignItems: 'center'
    },
    Logo: {
        marginTop: 100
    },
    logoText: {
        color: 'gray',
        fontFamily: "Poppins-Bold",
        fontSize: 35,
    },
    textContainer: {
        position: 'absolute',
        marginTop: 320

    }
})

export default Home; 
