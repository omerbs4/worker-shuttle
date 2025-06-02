import React from "react";
import AppNavigator from "./src/navigation/AppNavigator";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RootStackParamList } from "./src/types/navigation";

import AdminHomeScreen from "./src/screens/AdminHomeScreen";
import AdminLoginScreen from "./src/screens/AdminLoginScreen";
import AddWorkerScreen from "./src/screens/AddWorkerScreen";
import WorkerListScreen from "./src/screens/WorkerListScreen";
import WorkerLoginScreen from "./src/screens/WorkerLoginScreen";
import WorkerHomeScreen from "./src/screens/WorkerHomeScreen";
import AdminViewSeatsScreen from "./src/screens/AdminViewSeatsScreen";
import SettingsScreen from "./src/screens/SettingsScreen";

import { ThemeProvider } from "./src/contexts/ThemeContext";
import { Button, TouchableOpacity } from "react-native";
import {Ionicons} from '@expo/vector-icons'




const Stack = createNativeStackNavigator<RootStackParamList>();



const App = () => {
  return (
    <ThemeProvider>
    <NavigationContainer>
       <Stack.Navigator
          initialRouteName="AdminLogin"
          screenOptions={({ navigation }) => ({
            headerRight: () => (
              <TouchableOpacity 
              onPress={()=> navigation.navigate('Settings')}
              style={{
                height:'200%',
                justifyContent:'center',
                alignItems:'center',
                marginRight:-10,
              }}
              >
                <Ionicons name="settings-outline" size={24} color={'black'}/>

              </TouchableOpacity>
            ),
          })}
        >
        <Stack.Screen name="AdminLogin" component={AdminLoginScreen} />
        <Stack.Screen name="AdminHome" component={AdminHomeScreen} />
        <Stack.Screen name="AddWorker" component={AddWorkerScreen} />
        <Stack.Screen name="ViewWorkers" component={WorkerListScreen} />
        <Stack.Screen name="WorkerPanel" component={WorkerLoginScreen} />
        <Stack.Screen name="WorkerHome" component={WorkerHomeScreen} />
        <Stack.Screen name="AdminViewSeats" component={AdminViewSeatsScreen}/>
        <Stack.Screen name="Settings" component={SettingsScreen}
        options={({ navigation }) => ({
      headerRight: () => (
        <TouchableOpacity
          onPress={() => navigation.navigate('Settings')}
          style={{ marginRight: -10 }}
        >
          <Ionicons name="settings" size={24} color="black" />
        </TouchableOpacity>
      )
    })}/>
      </Stack.Navigator>
    </NavigationContainer>
    </ThemeProvider>
  )
}

export default App;