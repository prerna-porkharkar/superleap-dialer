import { Contact } from "@/types";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const getContacts = async (): Promise<Contact[]> => {
  try {
    const contactsJson = await AsyncStorage.getItem("contacts");
    if (!contactsJson) {
      return [];
    }
    const contacts = JSON.parse(contactsJson) as Contact[];
    return contacts;
  } catch (e) {
    return [];
  }
};
