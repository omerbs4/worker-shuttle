import React, { useState} from "react";
import { Button,
  KeyboardAvoidingView,
  Platform, StyleSheet, 
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../types/navigation";
import { useTheme } from "../contexts/ThemeContext";

const AdminLoginScreen = () => {
  const { theme, isDark, toggleTheme } = useTheme(); // ✅ Global theme
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  const handleLogin = () => {
    if (email === "omer@com" && password === "123456") {
      Alert.alert("Giriş Başarılı");
      navigation.navigate("AdminHome");
    } else {
      Alert.alert("Giriş Başarısız", "Email veya şifre yanlış");
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={[styles.container, theme.container]}
    >
      <Text style={[styles.title, theme.title]}>Admin Login</Text>

      <View style={styles.inputWrapper}>
        <TextInput
          style={[styles.input, theme.input]}
          placeholder="Email"
          placeholderTextColor={isDark ? "#bbb" : "#666"}
          value={email}
          onChangeText={setEmail}
          autoCapitalize="none"
          keyboardType="email-address"
          textContentType="emailAddress"
        />
      </View>

      <View style={styles.inputWrapper}>
        <TextInput
          style={[styles.input, theme.input]}
          placeholder="Password"
          placeholderTextColor={isDark ? "#bbb" : "#666"}
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          textContentType="password"
        />
      </View>

      <TouchableOpacity style={[styles.loginButton, theme.loginButton]} onPress={handleLogin}>
        <Text style={[styles.loginButtonText, theme.loginButtonText]}>Giriş Yap</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.workerPanelButton, theme.workerPanelButton]}
        onPress={() => navigation.navigate("WorkerPanel")}
      >
        <Text style={[styles.workerPanelButtonText, theme.workerPanelButtonText]}>
          Worker Panel
        </Text>
      </TouchableOpacity>

      
    </KeyboardAvoidingView>
  );
};

export default AdminLoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 30,
    justifyContent: "center",
  },
  title: {
    fontSize: 32,
    fontWeight: "700",
    marginBottom: 40,
    textAlign: "center",
  },
  inputWrapper: {
    marginBottom: 20,
  },
  input: {
    height: 50,
    borderRadius: 30,
    paddingHorizontal: 20,
    fontSize: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3,
  },
  loginButton: {
    height: 50,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
    marginBottom: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 6,
  },
  loginButtonText: {
    fontSize: 18,
    fontWeight: "700",
  },
  workerPanelButton: {
    height: 45,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1.5,
    marginBottom: 30,
  },
  workerPanelButtonText: {
    fontSize: 16,
    fontWeight: "600",
  },
  
  
});
