import React from "react";
import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems:'center',
    paddingHorizontal: 20,
    backgroundColor: "#f2f2f2", // Hafif gri arkaplan
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 30,
    color: "#323232", // Ana metin rengi
  },
  inputWrapper: {
    marginBottom: 20,
    alignItems: "center",
  },
  input: {
    width: 280,
    height: 50,
    borderRadius: 8,
    paddingHorizontal: 15,
    fontSize: 16,
    fontWeight: "600",
    backgroundColor: "#fff",
    borderColor: "#323232",
    borderWidth: 2,
    color: "#323232",
    shadowColor: "#323232",
    shadowOffset: { width: 4, height: 4 },
    shadowOpacity: 0.4,
    shadowRadius: 4,
    elevation: 6,
    margin:8

  },
  loginButton: {
    width: 200,
    height: 50,
    borderRadius: 8,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    marginTop: 10,
    marginBottom: 15,
    borderWidth: 2,
    borderColor: "#323232",
    shadowColor: "#323232",
    shadowOffset: { width: 4, height: 4 },
    shadowOpacity: 0.4,
    shadowRadius: 4,
    elevation: 6,
  },
  loginButtonText: {
    fontSize: 16,
    fontWeight: "700",
    color: "#323232",
  },
  workerPanelButton: {
    width: 200,
    height: 45,
    borderRadius: 8,
    borderWidth: 2,
    borderColor: "#323232",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    backgroundColor: "#fff",
    shadowColor: "#323232",
    shadowOffset: { width: 4, height: 4 },
    shadowOpacity: 0.4,
    shadowRadius: 4,
    elevation: 6,
  },
  workerPanelButtonText: {
    fontSize: 15,
    fontWeight: "600",
    color: "#323232",
  },
});

