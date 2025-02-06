import { ReactNode, useCallback, useState } from "react";
import { ContactsContext } from "./context";
import { Contact } from "@/types";
import { createContact } from "@/utils/create-contact";

export const ContactsProvider = ({ children }: { children: ReactNode }) => {
  const [contacts, setContacts] = useState<Contact[]>([]);

  const addContact = useCallback(async (contact: Contact) => {
    const newContacts = await createContact(contact);
    if (!newContacts) {
      return;
    }
    setContacts(newContacts);
  }, []);

  return (
    <ContactsContext.Provider value={{ contacts, addContact }}>
      {children}
    </ContactsContext.Provider>
  );
};
