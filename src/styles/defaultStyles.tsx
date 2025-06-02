import { StyleSheet } from "react-native";

export const defaultStyles = StyleSheet.create({
    container:{
        flex:1,
        padding:16,
    },
    button: {
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 8,
    alignItems: "center",
    marginVertical: 10,
  },
  buttonPrimary: {
    backgroundColor: "#4CAF50",
  },
  buttonSecondary: {
    backgroundColor: "#2196F3",
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#fff",
  },
  input: {
    backgroundColor: "#fff",
    color: "#222",
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    marginVertical: 8,
    borderRadius: 6,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 16,
    color: "#222",
  },
})