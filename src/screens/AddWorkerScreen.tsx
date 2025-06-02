import React,{useState} from "react";
import { View, Text, TextInput, Button, StyleSheet, Alert ,TouchableOpacity} from "react-native";
import {collection,addDoc} from "firebase/firestore";
import { db } from "../firebase/firebaseConfig";
import { useTheme } from "../contexts/ThemeContext";
import { defaultStyles } from "../styles/defaultStyles";
import { styles } from "../styles/ui";

const AddWorkerScreen = () =>{
    const {theme} = useTheme();
    const [name, setName] = useState("");
    const [lastName,setLastName] = useState("");
    const [tc, setTc] = useState("");
    const [phone,setPhone] = useState("");
    const [loading,setLoading] = useState(false);

    const handleAddWorker = async ()=>{
       if(!tc || !name || !lastName || !phone){
        Alert.alert("Error" ,"Please fill all fields");
        return;
    }
    try {
        await addDoc(collection(db, "workers"), {
            tc,
            name,
            lastName,
            phone,
            createdAt:new Date(),
        });
        Alert.alert("Success", "Worker added successfully");
        setTc("");
        setName("");
        setLastName("");
        setPhone("");
        } catch (error) {
            console.error("Error adding worker: ", error);
            Alert.alert("Error", "Failed to add worker");
            }
    };


    return(
        <View style={defaultStyles.container}>
            <Text style={defaultStyles.title}>Add Worker</Text>
            <TextInput
                style={defaultStyles.input}
                placeholder="tc :"
                value={tc}
                onChangeText={setTc}
                keyboardType="number-pad"
                />
            <TextInput style={defaultStyles.input} placeholder="Ad" value={name} onChangeText={setName} />
            <TextInput style={defaultStyles.input} placeholder="Soyad" value={lastName} onChangeText={setLastName} />
            <TextInput style={defaultStyles.input} placeholder="Telefon" value={phone} onChangeText={setPhone} />
            <TouchableOpacity 
                style={[styles.loginButton,theme.loginButton, loading && {opacity:0.6}]}
                onPress={handleAddWorker}>
                <Text style={[styles.loginButtonText,theme.loginButtonText]}>Ekle</Text>
            </TouchableOpacity>
        </View>
    );
};
export default AddWorkerScreen;



    