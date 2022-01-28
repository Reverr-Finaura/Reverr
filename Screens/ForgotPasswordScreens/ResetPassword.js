import { View, Text, StyleSheet, TouchableOpacity, TextInput, Keyboard, TouchableWithoutFeedback } from 'react-native';
import React from 'react';
import AppColors from '../../Constaint/AppColors';
import { useNavigation } from '@react-navigation/native'
import Backbtn from '../../Componants/Backbtn';
import CustomBtn from '../../Componants/CustomBtn';

const ResetPassword = () => {
    const navigation = useNavigation();

    return (
        <TouchableWithoutFeedback onPress={() => { Keyboard.dismiss() }}>
            <View style={styles.screen}>
                <View style={{ marginTop: 10 }}>
                    <Backbtn onPress={() => { navigation.goBack() }} />
                </View>
                <View style={styles.pageInfo}>
                    <Text style={[styles.Text, { fontSize: 24, color: AppColors.FontsColor, marginBottom: 13 }]}>Reset Password</Text>
                    <Text style={[styles.Text, { fontSize: 14, color: AppColors.infoFonts }]}>Please receive your password reset </Text>
                    <Text style={[styles.Text, { fontSize: 14, color: AppColors.infoFonts }]}>instructions</Text>
                </View>
                <View style={styles.container}>
                    <Text style={styles.inputHeader}>New Password</Text>
                    <TextInput style={styles.input} placeholder='Password' placeholderTextColor={AppColors.infoFonts} />
                    <TextInput style={styles.input} placeholder='Conferm Password' placeholderTextColor={AppColors.infoFonts} />
                    <CustomBtn
                        Title="Set Password"
                        style={{ marginTop: 20 }}
                        onPress={() => { navigation.replace("Login") }}
                    />
                </View>
            </View>
        </TouchableWithoutFeedback>
    );
};
const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: AppColors.primarycolor
    },
    pageInfo: {
        marginTop: 60,
        marginStart: 30
    },
    Text: {
        fontFamily: "Poppins-Regular"
    },
    inputHeader: {
        color: AppColors.FontsColor,
        fontFamily: "Poppins-Regular",
        marginStart: 22,
        fontSize: 16
    },
    container: {
        marginTop: 50
    },
    input: {
        fontSize: 14,
        marginStart: 20,
        paddingStart: 10,
        color: AppColors.FontsColor,
        paddingTop: 0,
        marginBottom: 10,
        fontFamily: "Poppins-Regular",
        backgroundColor: AppColors.inputFieldColor,
        marginTop: 5,
        borderRadius: 10,
        paddingBottom: 0,
        height: 50,
        width: '90%'
    }
})

export default ResetPassword;
