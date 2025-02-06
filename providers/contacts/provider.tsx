import { ReactNode, useCallback, useEffect, useState } from "react";
import { ContactsContext } from "./context";
import { CallLog, Contact } from "@/types";
import { createContact } from "@/utils/create-contact";
import { getContacts } from "@/utils/get-contacts";
import { getBlockedContacts } from "@/utils/get-blocked-contacts";
import { syncBlockedContacts } from "@/utils/set-blocked-contacts";
import { unBlockContact } from "@/utils/unblock-contact";
import { createCallLog } from "@/utils/create-call-log";
import { getCallLogs } from "@/utils/get-call-log";

export const ContactsProvider = ({ children }: { children: ReactNode }) => {
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [blockedContacts, setBlockedContacts] = useState<Contact[]>([]);
  const [callLogs, setCallLogs] = useState<CallLog[]>([]);

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

  const triggerCall = useCallback(async (phoneNumber: string) => {
    if (phoneNumber.length > 0) {
      alert(`Calling ${phoneNumber}...`);

      const newCallLogs = await createCallLog(phoneNumber, "outgoing");
      if (!newCallLogs) {
        return;
      }
      setCallLogs(newCallLogs);
    }
  }, []);

  useEffect(() => {
    getContacts().then(setContacts);
    getBlockedContacts().then(setBlockedContacts);
    getCallLogs().then(setCallLogs);
  }, []);

  return (
    <ContactsContext.Provider
      value={{
        contacts,
        addContact,
        blockedContacts,
        blockContact,
        unBlock,
        triggerCall,
        callLogs,
      }}
    >
      {children}
    </ContactsContext.Provider>
  );
};
