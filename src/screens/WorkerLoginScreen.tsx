import React,{useState} from "react";
import { View, Text, Button, StyleSheet ,TextInput,Alert,TouchableOpacity,ActivityIndicator} from "react-native";
import {collection ,query,where,getDocs} from "firebase/firestore";
import { db } from "../firebase/firebaseConfig";
import { useNavigation } from '@react-navigation/native';
import {NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from "../types/navigation"; // navigation tipi buradaysa
import { useTheme } from "../contexts/ThemeContext";
import { styles } from "../styles/ui";


type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'WorkerHome'>;

const WorkerPanelScreen = () => {
    const {theme} = useTheme(); 
    const [tc, setTc] = useState("");   
    const [phone, setPhone] = useState("");
    const [loading, setLoading] = useState(false); 
    const navigation = useNavigation<NavigationProp>();   

   const handleWorkerLogin = async () => {
        if(tc.length!==11 || phone.length<10){
            Alert.alert("Error", "Please enter valid TC and phone number");
            return;
        }
        setLoading(true);
        try {
            const workersRef = collection(db,"workers");
            const q =query(workersRef,where("tc","==",tc),where("phone","==",phone));
            const querySnapshot = await getDocs(q); 

            if(!querySnapshot.empty) {
                Alert.alert("Login Successful", "Welcome to the Worker Login");
                navigation.navigate("WorkerHome",{tc}); // Navigate to Worker Home Screen
            }else{
                Alert.alert("Login Failed", "Invalid TC or phone number");
            }
        }
            catch(e){
                console.error("Error during login: ", e);
                Alert.alert("Error", "An error occurred during login");
            } finally {
                setLoading(false);
            }
        };
    return (
        <View style={[styles.container,theme.container]}>
            <Text style={styles.title}>Worker Login</Text>
            <TextInput
                style={styles.input}
                placeholder="TC No"
                value={tc}
                onChangeText={setTc}
                keyboardType="number-pad"
                maxLength={11}
            />
            <TextInput
                style={styles.input}
                placeholder="Telefon Numarası"
                value={phone}
                onChangeText={setPhone}
                keyboardType="phone-pad"
            />
            <TouchableOpacity
        style={[styles.loginButton, theme.loginButton, loading && { opacity: 0.6 }]}
        onPress={handleWorkerLogin}
        disabled={loading}
      >
        {loading ? (
          <ActivityIndicator size="small" color={theme.loginButtonText?.color || "#fff"} />
        ) : (
          <Text style={[styles.loginButtonText, theme.loginButtonText]}>Giriş Yap</Text>
        )}
      </TouchableOpacity>
            
        </View>
    );
};

/*const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 20 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20, textAlign: 'center' },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 12,
    borderRadius: 12,
    marginBottom: 16,
  },
});*/
export default WorkerPanelScreen;


    