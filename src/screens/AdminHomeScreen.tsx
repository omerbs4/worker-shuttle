import React, { useState } from "react";
import { View,Text,Button,StyleSheet, TouchableOpacity ,ActivityIndicator} from "react-native";
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from "../types/navigation";
import { useNavigation } from '@react-navigation/native';
import { useTheme } from "../contexts/ThemeContext";
import { styles } from "../styles/ui";


type AdminHomeScreenNavigationProp = NativeStackNavigationProp<
RootStackParamList,
'AdminHome'
>;

const AdminHomeScreen =() =>{
    const {theme} = useTheme();
    const [loading, setLoading] = useState(false);
    
    const navigation = useNavigation<AdminHomeScreenNavigationProp>();

    return(
        <View style={[styles.container,theme.container]}>
            <Text style={styles.title}>Admin Manager</Text>  
            <TouchableOpacity
                style={[styles.loginButton,theme.loginButton,loading && {opacity:0.6}]}
                onPress={()=>navigation.navigate('ViewWorkers')}>
                    <Text style={[styles.loginButtonText,theme.loginButtonText]}>İşçileri Göster</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={[styles.loginButton,theme.loginButton,loading && {opacity:0.6}]}
                onPress={()=>navigation.navigate('AddWorker')}>
                    <Text style={[styles.loginButtonText,theme.loginButtonText]}>İşçi Ekle</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={[styles.loginButton,theme.loginButton,loading && {opacity:0.6}]}
                onPress={()=>navigation.navigate('AdminViewSeats')}>
                    <Text style={[styles.loginButtonText,theme.loginButtonText]}>Koltuk Bilgisi</Text>
            </TouchableOpacity>
         
            
            

            
            
        </View>
    );
};

export default AdminHomeScreen;
/*
const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent: "center",
        padding: 16
    },
    title:{
        fontSize: 24,
        fontWeight: "bold",
        textAlign: "center",
        marginBottom:30
    },
});*/