import { ReactNode, useCallback, useEffect, useState } from "react";
import { ContactsContext } from "./context";
import { Contact } from "@/types";
import { createContact } from "@/utils/create-contact";
import { getContacts } from "@/utils/get-contacts";
import { getBlockedContacts } from "@/utils/get-blocked-contacts";
import { syncBlockedContacts } from "@/utils/set-blocked-contacts";
import { unBlockContact } from "@/utils/unblock-contact";

export const ContactsProvider = ({ children }: { children: ReactNode }) => {
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [blockedContacts, setBlockedContacts] = useState<Contact[]>([]);

  const addContact = useCallback(async (contact: Contact) => {
    const newContacts = await createContact(contact);
    if (!newContacts) {
      return;
    }
    setContacts(newContacts);
  }, []);

  const blockContact = useCallback(async (contact: Contact) => {
    const newBlockedContacts = await syncBlockedContacts(contact);
    if (!newBlockedContacts) {
      return;
    }
    setBlockedContacts(newBlockedContacts);
  }, []);

  const unBlock = useCallback(async (contact: Contact) => {
    const newBlockedContacts = await unBlockContact(contact.id);
    if (!newBlockedContacts) {
      return;
    }
    setBlockedContacts(newBlockedContacts);
  }, []);

  useEffect(() => {
    getContacts().then(setContacts);
    getBlockedContacts().then(setBlockedContacts);
  }, []);

  return (
    <ContactsContext.Provider
      value={{ contacts, addContact, blockedContacts, blockContact, unBlock }}
    >
      {children}
    </ContactsContext.Provider>
  );
};
