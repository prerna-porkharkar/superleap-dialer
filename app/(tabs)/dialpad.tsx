import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const DialPad = () => {
  const [phoneNumber, setPhoneNumber] = useState("");

  const handlePress = (value: string) => {
    setPhoneNumber((prev) => prev + value);
  };

  const handleDelete = () => {
    setPhoneNumber((prev) => prev.slice(0, -1));
  };

  const handleCall = () => {
    if (phoneNumber.length > 0) {
      alert(`Calling ${phoneNumber}...`);
      // Here you can integrate with Linking API to initiate a real call
    }
  };

  const renderButton = (value: string) => (
    <TouchableOpacity style={styles.button} onPress={() => handlePress(value)}>
      <Text style={styles.buttonText}>{value}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.display}>{phoneNumber}</Text>
      <View style={styles.dialPad}>
        {[..."123456789*0#"].map((digit) => renderButton(digit))}
      </View>
      <View style={styles.actions}>
        <TouchableOpacity style={styles.callButton} onPress={handleCall}>
          <Ionicons name="call" size={30} color="white" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.deleteButton} onPress={handleDelete}>
          <Ionicons name="backspace" size={30} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
  display: {
    fontSize: 28,
    marginBottom: 20,
    color: "black",
  },
  dialPad: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    width: 250,
  },
  button: {
    width: 70,
    height: 70,
    justifyContent: "center",
    alignItems: "center",
    margin: 5,
    backgroundColor: "#e0e0e0",
    borderRadius: 35,
  },
  buttonText: {
    fontSize: 24,
    color: "black",
  },
  actions: {
    flexDirection: "row",
    marginTop: 20,
  },
  callButton: {
    backgroundColor: "green",
    padding: 15,
    borderRadius: 50,
    marginRight: 20,
  },
  deleteButton: {
    padding: 15,
  },
});

export default DialPad;
