import React,{useState}from "react";
import { useNavigation } from "@react-navigation/native";
import { View, Text, TextInput, Button, StyleSheet ,Alert} from "react-native"; 
import { RootStackParamList } from "../types/navigation";
import { NativeStackNavigationProp } from '@react-navigation/native-stack';



const AdminLoginScreen = () => {    
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
    
    const[email,setEmail] = useState("");
    const[password,setPassword] = useState("");

    const handleLogin=()=>{
        if(email==="omer@com" && password==="123456"){
            Alert.alert("Login Successful");
           // TODO: Yönlendirme 
           navigation.navigate("AdminHome");
        }else{
            Alert.alert("Login Failed", "Invalid email or password");
        }

    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Admin Login </Text>
                <TextInput
                style={styles.input}
                placeholder="Email"
                value={email}
                onChangeText={setEmail}
                autoCapitalize="none"
                keyboardType="email-address"
                />
                <TextInput 
                style={styles.input}
                placeholder="Password"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
                />
                <Button title="Login" onPress={handleLogin} />  
                <Button title="Worker Panel" onPress={()=>navigation.navigate("WorkerPanel")}></Button>  
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent: "center",
        padding: 16,
        backgroundColor: "#f5f5f5",
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 24,
        textAlign: "center",
    },
    input: {
        borderWidth: 1,
        borderColor: "#ccc",
        marginBottom: 16,
        padding: 12,
        borderRadius:24,
    }
});

export default AdminLoginScreen;

