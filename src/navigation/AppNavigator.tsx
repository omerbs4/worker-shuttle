import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import AdminLoginScreen from "../screens/AdminLoginScreen";
import AdminHomeScreen from "../screens/AdminHomeScreen";
import AddWorkerScreen from "../screens/AddWorkerScreen";  
import WorkerListScreen from "../screens/WorkerListScreen";   
import WorkerHomeScreen from "../screens/WorkerHomeScreen";
import AdminViewSeatsScreen from "../screens/AdminViewSeatsScreen";
import SettingsScreen from "../screens/SettingsScreen";



import { RootStackParamList } from "../types/navigation";  
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';


const Stack = createNativeStackNavigator();

const AppNavigator = () => {    
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="AdminLogin" component={AdminLoginScreen} options={{ headerShown: false }} // Hide the header for this screen
                />
                <Stack.Screen name="AdminHome" component={AdminHomeScreen} options={{ headerShown: false }} />
                <Stack.Screen name="AddWorker" component={AddWorkerScreen} options={{ headerShown: false }} />
                <Stack.Screen name="ViewWorkers" component={AdminHomeScreen} options={{ headerShown: false }} />
                <Stack.Screen name="WorkerList" component={WorkerListScreen} options={{ headerShown: false }} />
                {/* Add more screens as needed */}
                <Stack.Screen name="WorkerHome" component={WorkerHomeScreen} options={{ headerShown: false }} />
                  <Stack.Screen name="AdminViewSeats" component={AdminViewSeatsScreen} options={{ headerShown: false }} />
                {/* You can add more screens here as needed */}SettingsScreen
                <Stack.Screen name="SettingsScreen" component={SettingsScreen} options={{ headerShown: false }} />

                

            </Stack.Navigator>
        </NavigationContainer>
    );
};
export default AppNavigator;
