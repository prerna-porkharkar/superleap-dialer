import AsyncStorage from "@react-native-async-storage/async-storage";
import { getContacts } from "./get-contacts";
import { Contact } from "@/types";

export const createContact = async (contact: Contact) => {
  try {
    // get existing contacts
    const existingContacts = await getContacts();
    const newContacts = [...existingContacts, contact];
    await AsyncStorage.setItem("contacts", JSON.stringify(newContacts));
    return newContacts;
  } catch (e) {
    return false;
  }
};
