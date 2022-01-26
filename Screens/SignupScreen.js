import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import React, { useState } from 'react';
import AppColors from '../Constaint/AppColors';
import InputField from '../Componants/InputField';
import CustomBtn from '../Componants/CustomBtn';
import Backbtn from '../Componants/Backbtn';
import { useNavigation } from '@react-navigation/native';

const SignupScreen = () => {

    var [isSecure1, setisSecure1] = useState(true);
    var [isSecure2, setisSecure2] = useState(true);
    const [name, setname] = useState("");
    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");
    const [ConfermPass, setConfermPass] = useState("");
    const [mobile, setmobile] = useState("");
    const navigation = useNavigation();
    return (
        <View style={styles.screen}>
            <View style={{ marginTop: 10 }}>
                <Backbtn onPress={() => { navigation.goBack() }} />
            </View>
            <ScrollView>
                <View style={styles.pageInfo}>
                    <Text style={[styles.Text, { fontSize: 24, color: AppColors.FontsColor, marginBottom: 5 }]}>Signup</Text>
                    <Text style={[styles.Text, { fontSize: 14, color: AppColors.infoFonts }]}>Enter your basic information below </Text>
                </View>
                <View style={{ marginTop: 20 }}>
                    <InputField
                        iconName="user"
                        placeholder='Your Name'
                        size={35}
                        onChangeText={(n) => { setname(n) }}
                        style={styles.inputstyle}
                        Title="Name" />
                    <InputField
                        iconName="envelope"
                        placeholder='Enter mail/no.'
                        size={25}
                        onChangeText={(e) => { setemail(e) }}
                        style={styles.inputstyle}
                        Title="Email Adress/Phone no." />
                    <InputField
                        iconName="lock"
                        size={35}
                        onChangeText={(p1) => { setpassword(p1) }}
                        secureTextEntry={isSecure1}
                        showIcon={isSecure1 ? 'eye-slash' : 'eye'}
                        Eyelick={() => { setisSecure1((prev) => !prev) }}
                        showIconolor={AppColors.infoFonts}
                        showIconsize={25}
                        style={styles.inputstyle}
                        placeholder='Create password'
                        Title="Password" />
                    <InputField
                        iconName="lock"
                        size={35}
                        onChangeText={(p2) => { setConfermPass(p2) }}
                        style={styles.inputstyle}
                        secureTextEntry={isSecure2}
                        showIcon={isSecure2 ? 'eye-slash' : 'eye'}
                        Eyelick={() => { setisSecure2((prev) => !prev) }}
                        showIconolor={AppColors.infoFonts}
                        showIconsize={25}
                        placeholder='**********'
                        Title=" Conferm Password" />
                    <InputField
                        iconName="mobile"
                        placeholder='Your Mobile Number'
                        size={45}
                        onChangeText={(m) => { setmobile(m) }}
                        maxLength={10}
                        style={styles.inputstyle}
                        keyboardType='number-pad'
                        Title="Mobile Number" />
                    <CustomBtn
                        Title="Create Account"
                        onPress={() => { console.log(name, email, password, ConfermPass, mobile) }}
                        style={{ marginTop: 10 }}
                    />
                    <View style={styles.signuplink}>
                        <Text style={{ color: AppColors.infoFonts, fontFamily: "Poppins-Regular", }}>Already a user?</Text>
                        <TouchableOpacity onPress={() => {
                            navigation.navigate("Login")
                        }}>
                            <Text style={{ color: AppColors.FontsColor, fontFamily: "Poppins-Regular", }}>Login Now!</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>

        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: AppColors.primarycolor
    },
    pageInfo: {
        marginTop: 10,
        marginStart: 30
    },
    Text: {
        fontFamily: "Poppins-Regular"
    },
    inputstyle: {
        marginTop: 0,
        marginBottom: -10

    },
    signuplink: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 40,
        justifyContent: 'center'
    }
})

export default SignupScreen;
