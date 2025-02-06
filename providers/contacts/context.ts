import { CallLog, Contact } from "@/types";
import { createContext } from "react";

export interface ContactsContext {
  contacts: Contact[];
  blockedContacts: Contact[];
  addContact: (contact: Contact) => Promise<void>;
  blockContact: (contact: Contact) => Promise<void>;
  unBlock: (contact: Contact) => Promise<void>;
  triggerCall: (number: string) => Promise<void>;
  callLogs: CallLog[];
}

export const ContactsContext = createContext<ContactsContext>({
  contacts: [],
  blockedContacts: [],
  addContact: async () => {
    return;
  },
  blockContact: async () => {
    return;
  },
  unBlock: async () => {
    return;
  },
  triggerCall: async () => {
    return;
  },
  callLogs: [],
});
