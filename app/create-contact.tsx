import { ThemedView } from "@/components/ThemedView";
import { ScreenHeader } from "./components/screen-header/component";
import { BackBar } from "./components/back-bar/component";
import {
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
  Text,
} from "react-native";
import { useState } from "react";
import { Contact } from "@/types";
import { useTheme } from "@react-navigation/native";

export default function CreateContact() {
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [search, setSearch] = useState("");
  const { colors } = useTheme();

  const addContact = () => {
    if (name && phone) {
      setContacts([...contacts, { name, phone }]);
      setName("");
      setPhone("");
    }
  };

  return (
    <ThemedView>
      <BackBar />

      <View style={styles.wrapper}>
        <TextInput
          style={styles.input}
          placeholder="Name"
          value={name}
          onChangeText={setName}
        />
        <TextInput
          style={styles.input}
          placeholder="Phone"
          value={phone}
          keyboardType="phone-pad"
          onChangeText={setPhone}
        />
        <TouchableOpacity
          style={[styles.addButton, { backgroundColor: colors.primary }]}
          onPress={addContact}
        >
          <Text style={[styles.buttonText, { color: colors.card }]}>
            Add Contact
          </Text>
        </TouchableOpacity>
      </View>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    padding: 15,
  },
  input: {
    borderWidth: 1,
    padding: 10,
    width: "100%",
    marginVertical: 10,
    borderRadius: 5,
  },
  addButton: {
    backgroundColor: "blue",
    padding: 15,
    borderRadius: 5,
    marginTop: 10,
  },
  contactItem: {
    fontSize: 18,
    marginVertical: 5,
  },
  buttonText: {
    fontSize: 18,
    textAlign: "center",
  },
  contactsList: {},
});
