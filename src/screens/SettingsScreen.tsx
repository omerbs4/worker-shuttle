import React from "react";
import { View, Text, Button, StyleSheet ,TouchableOpacity} from "react-native";
import { useTheme } from "../contexts/ThemeContext";

const SettingsScreen = () => {
  const { isDark, toggleTheme, theme } = useTheme();

  return (
    <View style={[styles.container, theme.container]}>
      
      <TouchableOpacity
        style={[
          styles.themeToggleButton,
          isDark ? styles.themeDark : styles.themeLight
        ]}
        onPress={toggleTheme}
      >
        <Text style={styles.themeToggleText}>
          {isDark ? "Açık Temaya Geç" : "Karanlık Temaya Geç"}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 20,
    marginBottom: 20,
  },
   themeLight: {
    backgroundColor: "#333",
  },
  themeDark: {
    backgroundColor: "#bbb",
  },
  themeToggleButton: {
    alignSelf: "center",
    paddingVertical: 10,
    paddingHorizontal: 25,
    borderRadius: 20,
    marginBottom: 15,
  },
  themeToggleText: {
    fontSize: 14,
    fontWeight: "600",
    color: "#fff",
  },
});

/*

*/ 

export default SettingsScreen;
