import { CallLog } from "@/types";
import { getContacts } from "./get-contacts";
import { getCallLogs } from "./get-call-log";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const createCallLog = async (number: string, type: CallLog["type"]) => {
  try {
    const contacts = await getContacts();
    const contact = contacts.find((c) => c.phone === number);

    const callLogs = await getCallLogs();
    const newCallLogs: CallLog[] = [...callLogs, { contact, number, type }];
    await AsyncStorage.setItem("call_logs", JSON.stringify(newCallLogs));
    return newCallLogs;
  } catch (e) {
    return false;
  }
};
