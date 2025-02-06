import React, { useCallback, useMemo, useState } from "react";
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
import { useTheme } from "@react-navigation/native";
import Entypo from "@expo/vector-icons/Entypo";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { DEFAULT_TOUCHABLE_OPACITY } from "@/constants";
import Feather from "@expo/vector-icons/Feather";
import { useRouter } from "expo-router";
import { ItemSeparator } from "../components/item-separator/component";

const ContactsManager = () => {
  const { contacts } = useContacts();
  const [search, setSearch] = useState("");
  const { colors } = useTheme();

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
          style={[
            styles.input,
            { borderColor: colors.border, color: colors.text },
          ]}
          placeholder="Search contacts"
          placeholderTextColor={colors.text}
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

const ContactItem = ({ item }: { item: Contact }) => {
  const { colors } = useTheme();
  const { blockContact, blockedContacts, unBlock } = useContacts();
  const router = useRouter();

  const isBlockedContact = useMemo(
    () => blockedContacts.find((c) => c.id === item.id),
    [blockedContacts]
  );

  const onCallPress = useCallback(() => {
    router.push({ pathname: "/", params: { dailedNumber: item.phone } });
  }, []);

  const onBlockPress = useCallback(() => {
    blockContact(item);
  }, []);

  const onUnBlockPress = useCallback(() => {
    unBlock(item);
  }, []);

  return (
    <View style={styles.contactItem}>
      <View>
        <ThemedText type="default">
          {item.name} - {item.phone}
        </ThemedText>
        {isBlockedContact ? (
          <Text style={{ color: colors.notification }}>Blocked</Text>
        ) : null}
      </View>

      <View style={styles.buttons}>
        <TouchableOpacity
          onPress={onCallPress}
          activeOpacity={DEFAULT_TOUCHABLE_OPACITY}
        >
          <FontAwesome name="phone" size={18} color={colors.primary} />
        </TouchableOpacity>

        {isBlockedContact ? (
          <TouchableOpacity
            onPress={onUnBlockPress}
            activeOpacity={DEFAULT_TOUCHABLE_OPACITY}
          >
            <Feather name="check" size={18} color={colors.primary} />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            onPress={onBlockPress}
            activeOpacity={DEFAULT_TOUCHABLE_OPACITY}
          >
            <Entypo name="block" size={18} color={colors.notification} />
          </TouchableOpacity>
        )}
      </View>
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
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  contactItemText: {
    fontSize: 18,
  },
  contactsList: {},
  buttons: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 16,
  },
});

export default ContactsManager;
