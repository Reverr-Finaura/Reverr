import { View, Text, StyleSheet, TextInput, TouchableOpacity, Keyboard, TouchableWithoutFeedback } from 'react-native';
import React from 'react';
import AppColors from '../../Constaint/AppColors';
import Backbtn from '../../Componants/Backbtn';
import { useNavigation } from '@react-navigation/native'
import CustomBtn from '../../Componants/CustomBtn';

const ForgotPassword = () => {

    const navigation = useNavigation();
    return (
        <TouchableWithoutFeedback onPress={() => { Keyboard.dismiss() }}>
            <View style={styles.screen}>
                <View style={{ marginTop: 10 }}>
                    <Backbtn onPress={() => { navigation.goBack() }} />
                </View>
                <View style={styles.pageInfo}>
                    <Text style={[styles.Text, { fontSize: 24, color: AppColors.FontsColor, marginBottom: 13 }]}>Forget Password</Text>
                    <Text style={[styles.Text, { fontSize: 14, color: AppColors.infoFonts }]}>Please receive your password reset </Text>
                    <Text style={[styles.Text, { fontSize: 14, color: AppColors.infoFonts }]}>instructions</Text>
                </View>
                <View style={styles.container}>
                    <Text style={styles.inputHeader}>Email/Phone No.</Text>
                    <TextInput style={styles.input} placeholder='Your email/Phone no.' placeholderTextColor={AppColors.infoFonts} />
                    <CustomBtn
                        Title="Send Password"
                        style={{ marginTop: 20 }}
                        onPress={() => {
                            navigation.navigate("Otp")

                        }}
                    />
                    <TouchableOpacity onPress={() => { navigation.navigate("Login") }}>
                        <Text style={[styles.inputHeader, { fontSize: 12, alignSelf: 'center', marginTop: 20 }]}>I remember the password</Text>
                    </TouchableOpacity>
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
        marginTop: 80
    },
    input: {
        fontSize: 14,
        marginStart: 20,
        paddingStart: 10,
        color: AppColors.FontsColor,
        paddingTop: 0,
        fontFamily: "Poppins-Regular",
        backgroundColor: AppColors.inputFieldColor,
        marginTop: 5,
        borderRadius: 10,
        paddingBottom: 0,
        height: 50,
        width: '90%'
    }
})


export default ForgotPassword;
