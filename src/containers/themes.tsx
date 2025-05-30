import { StyleSheet } from "react-native";

export const lightTheme = StyleSheet.create({
  container: {
    backgroundColor: "#fefefe",
  },
  title: {
    color: "#222",
  },
  input: {
    backgroundColor: "#fff",
    color: "#222",
    borderWidth: 1,
    borderColor: "#ddd",
  },
  loginButton: {
    backgroundColor: "#4CAF50",
  },
  loginButtonText: {
    color: "#fff",
  },
  workerPanelButton: {
    borderColor: "#4CAF50",
  },
  workerPanelButtonText: {
    color: "#4CAF50",
  },
});

export const darkTheme = StyleSheet.create({
  container: {
    backgroundColor: "#121212",
  },
  title: {
    color: "#eee",
  },
  input: {
    backgroundColor: "#1E1E1E",
    color: "#eee",
    borderWidth: 1,
    borderColor: "#444",
  },
  loginButton: {
    backgroundColor: "#2196F3",
  },
  loginButtonText: {
    color: "#fff",
  },
  workerPanelButton: {
    borderColor: "#2196F3",
  },
  workerPanelButtonText: {
    color: "#2196F3",
  },
});
