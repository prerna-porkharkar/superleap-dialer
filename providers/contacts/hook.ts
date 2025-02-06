import { useContext } from "react";
import { ContactsContext } from "./context";

export const useContacts = () => {
  return useContext(ContactsContext);
};
