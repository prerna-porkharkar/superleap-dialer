import { Contact } from "@/types";
import { getBlockedContacts } from "./get-blocked-contacts";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const syncBlockedContacts = async (contact: Contact) => {
  try {
    // get existing blocked contacts
    const existingBlockedContacts = await getBlockedContacts();
    const newBlockedContacts = [...existingBlockedContacts, contact];
    await AsyncStorage.setItem("blocked_contacts", JSON.stringify(newBlockedContacts));
    return newBlockedContacts;
  } catch (e) {
    return false;
  }
};
