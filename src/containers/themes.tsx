import { StyleSheet } from "react-native";

export const lightTheme = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fefefe",
    padding: 16,
  },
  title: {
    color: "#222",
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 16,
  },
  input: {
    backgroundColor: "#fff",
    color: "#222",
    borderWidth: 1,
    borderColor: "#ddd",
    padding: 10,
    marginVertical: 8,
    borderRadius: 6,
  },
  loginButton: {
    backgroundColor: "#4CAF50",
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 8,
    alignItems: "center",
    marginVertical: 10,
  },
  loginButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
  workerPanelButton: {
    borderColor: "#4CAF50",
    borderWidth: 1,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignItems: "center",
    marginVertical: 10,
  },
  workerPanelButtonText: {
    color: "#4CAF50",
    fontSize: 16,
    fontWeight: "600",
  },
});

export const darkTheme = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121212",
    padding: 16,
  },
  title: {
    color: "#eee",
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 16,
  },
  input: {
    backgroundColor: "#1E1E1E",
    color: "#eee",
    borderWidth: 1,
    borderColor: "#444",
    padding: 10,
    marginVertical: 8,
    borderRadius: 6,
  },
  loginButton: {
    backgroundColor: "#2196F3",
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 8,
    alignItems: "center",
    marginVertical: 10,
  },
  loginButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
  workerPanelButton: {
    borderColor: "#2196F3",
    borderWidth: 1,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignItems: "center",
    marginVertical: 10,
  },
  workerPanelButtonText: {
    color: "#2196F3",
    fontSize: 16,
    fontWeight: "600",
  },
});
