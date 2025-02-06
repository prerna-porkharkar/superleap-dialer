import { CallLog } from "@/types";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const getCallLogs = async () => {
  try {
    const callLogsJson = await AsyncStorage.getItem("call_logs");
    if (!callLogsJson) {
      return [];
    }
    const callLogs = JSON.parse(callLogsJson) as CallLog[];
    return callLogs;
  } catch (e) {
    return [];
  }
};
