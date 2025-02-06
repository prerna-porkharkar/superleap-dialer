import { Contact } from "@/types";
import { createContext } from "react";

export interface ContactsContext {
  contacts: Contact[];
  addContact: (contact: Contact) => Promise<void>;
}

export const ContactsContext = createContext<ContactsContext>({
  contacts: [],
  addContact: async () => {
    return;
  },
});
