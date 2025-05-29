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


const Stack = createNativeStackNavigator<RootStackParamList>();



const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="AdminLogin">
        <Stack.Screen name="AdminLogin" component={AdminLoginScreen} />
        <Stack.Screen name="AdminHome" component={AdminHomeScreen} />
        <Stack.Screen name="AddWorker" component={AddWorkerScreen} />
        <Stack.Screen name="ViewWorkers" component={WorkerListScreen} />
        <Stack.Screen name="WorkerPanel" component={WorkerLoginScreen} />
        <Stack.Screen name="WorkerHome" component={WorkerHomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;