import React, { createContext, useState } from "react";
import auth from "@react-native-firebase/auth";
import firestore from '@react-native-firebase/firestore';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    return (
        <AuthContext.Provider
            value={{
                user,
                setUser,
                login: async (email, password) => {
                    try {
<<<<<<< HEAD
                        await auth().signInWithEmailAndPassword(email, password);
                    } catch (e) {
                        if(e.code==='auth/wrong-password'){
                            alert("Wrong password try again!");
                        }
                        if(e.code==='auth/user-not-found'){
                            alert("No user registered with that email");
                        }
=======
                        await auth().signInWithEmailAndPassword(email, password)
                    } catch (e) {
                        console.log(e);
>>>>>>> 82b3d9ac0503789985bd6b597a8263ae4dcd393b
                    }
                },
                register: async (email, password) => {
                    try {
                        await auth().createUserWithEmailAndPassword(email, password)
<<<<<<< HEAD
                        // .then(()=>{
                        //     console.log(auth().currentUser);
                        // })
=======
>>>>>>> 82b3d9ac0503789985bd6b597a8263ae4dcd393b
                    } catch (e) {
                        if (e.code === 'auth/email-already-in-use') {
                            alert("Email id already used")
                        }

                        if (e.code === 'auth/invalid-email') {
<<<<<<< HEAD
                            alert("Invalid-email !")
=======
                            alert("invalid-email !")
>>>>>>> 82b3d9ac0503789985bd6b597a8263ae4dcd393b
                        }

                        console.error(error);
                    }
                },
                logout: async () => {
                    try {
                        await auth().signOut();
                    } catch (e) {
                        console.log(e);
                    }
                }
            }}
        >
            {children}
        </AuthContext.Provider>
    );
}