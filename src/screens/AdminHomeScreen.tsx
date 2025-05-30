import React from "react";
import { View,Text,Button,StyleSheet, TouchableOpacity } from "react-native";
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from "../types/navigation";
import { useNavigation } from '@react-navigation/native';

type AdminHomeScreenNavigationProp = NativeStackNavigationProp<
RootStackParamList,
'AdminHome'
>;

const AdminHomeScreen =() =>{
    const navigation = useNavigation<AdminHomeScreenNavigationProp>();

    return(
        <View style={styles.container}>
            <Text style={styles.title}>Admin Manager</Text>
            <Button
                title="Add Worker"
                onPress={() => navigation.navigate('AddWorker')}
            />
            <Button 
            title="View Workers"
            onPress={() => navigation.navigate('ViewWorkers')}
            />
            <Button
            title="Koltuklari Göster"
            onPress={()=>navigation.navigate('AdminViewSeats')}
            />
        </View>
    );
};

export default AdminHomeScreen;

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
});