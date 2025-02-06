import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  FlatList,
} from "react-native";
import { ScreenHeader } from "@/app/components/screen-header/component";
import { CreateContactButton } from "../components/create-contact-button/component";
import { Contact } from "@/types";

const ContactsManager = () => {
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [search, setSearch] = useState("");

  const filteredContacts = contacts.filter(
    (contact) =>
      contact.name.toLowerCase().includes(search.toLowerCase()) ||
      contact.phone.includes(search)
  );

  return (
    <View style={styles.container}>
      <ScreenHeader title="Contacts" ActionButton={<CreateContactButton />} />
      <TextInput
        style={styles.input}
        placeholder="Search contacts"
        value={search}
        onChangeText={setSearch}
      />
      <FlatList
        data={filteredContacts}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <Text style={styles.contactItem}>
            {item.name} - {item.phone}
          </Text>
        )}
      />
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
  input: {
    borderWidth: 1,
    padding: 10,
    width: "80%",
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
    fontSize: 24,
    color: "black",
  },
  contactsList: {},
});

export default ContactsManager;
