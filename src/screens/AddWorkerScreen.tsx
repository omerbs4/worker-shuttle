import React,{useState} from "react";
import { View, Text, TextInput, Button, StyleSheet, Alert } from "react-native";
import {collection,addDoc} from "firebase/firestore";
import { db } from "../firebase/firebaseConfig";

const AddWorkerScreen = () =>{
    const [name, setName] = useState("");
    const [lastName,setLastName] = useState("");
    const [tc, setTc] = useState("");
    const [phone,setPhone] = useState("");

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
        <View style={styles.container}>
            <Text style={styles.title}>Add Worker</Text>
            <TextInput
                style={styles.input}
                placeholder="tc :"
                value={tc}
                onChangeText={setTc}
                keyboardType="number-pad"
                />
            <TextInput style={styles.input} placeholder="Ad" value={name} onChangeText={setName} />
            <TextInput style={styles.input} placeholder="Soyad" value={lastName} onChangeText={setLastName} />
            <TextInput style={styles.input} placeholder="Telefon" value={phone} onChangeText={setPhone} />
            <Button title="Add" onPress={handleAddWorker}></Button>
        </View>
    );
};
export default AddWorkerScreen;

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: "center",
        padding:20
    },
    title:{
        fontSize: 24,
        fontWeight: "bold",
        textAlign: "center",
    },
    input: {
        borderWidth: 1,
        borderColor: "#ccc",
        marginBottom: 16,
        padding: 12,
        borderRadius:12,
    },
});


    