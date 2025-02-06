import { ReactNode } from "react";
import { ContactsContext } from "./context";

export const ContactsProvider = ({ children }: { children: ReactNode }) => {
  return (
    <ContactsContext.Provider value={{}}>{children}</ContactsContext.Provider>
  );
};
