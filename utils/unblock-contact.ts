import AsyncStorage from "@react-native-async-storage/async-storage";
import { getBlockedContacts } from "./get-blocked-contacts";

export const unBlockContact = async (id: string) => {
  try {
    const blockedContacts = await getBlockedContacts();

    const newBlockedContacts = [...blockedContacts].filter(
      (contact) => contact.id !== id
    );

    await AsyncStorage.setItem(
      "blocked_contacts",
      JSON.stringify(newBlockedContacts)
    );
    return newBlockedContacts;
  } catch (e) {
    return false;
  }
};
