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
import { useContacts } from "@/providers/contacts/hook";
import { ThemedText } from "@/components/ThemedText";

const ContactsManager = () => {
  const { contacts } = useContacts();
  const [search, setSearch] = useState("");

  const filteredContacts = contacts.filter(
    (contact) =>
      contact.name.toLowerCase().includes(search.toLowerCase()) ||
      contact.phone.includes(search)
  );

  return (
    <View style={styles.container}>
      <ScreenHeader title="Contacts" ActionButton={<CreateContactButton />} />
      <View style={styles.contentWrapper}>
        <TextInput
          style={styles.input}
          placeholder="Search contacts"
          value={search}
          onChangeText={setSearch}
        />
        <FlatList
          data={filteredContacts}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => <ContactItem item={item} />}
          style={styles.contactlist}
          ItemSeparatorComponent={() => <ItemSeparator />}
        />
      </View>
    </View>
  );
};

const ItemSeparator = () => {
  return <View style={[styles.separator]} />;
};

const ContactItem = ({ item }: { item: Contact }) => {
  return (
    <View style={styles.contactItem}>
      <ThemedText type="default">
        {item.name} - {item.phone}
      </ThemedText>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentWrapper: {
    flex: 1,
    width: "100%",
    padding: 15,
  },
  input: {
    borderWidth: 1,
    padding: 10,
    width: "100%",
    borderRadius: 5,
    paddingHorizontal: 15,
  },
  contactlist: {
    paddingTop: 20,
  },
  contactItem: {
    paddingVertical: 15,
  },
  contactItemText: {
    fontSize: 18,
  },
  contactsList: {},
  separator: {},
});

export default ContactsManager;
