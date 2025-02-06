import { FlatList, View } from "react-native";
import { ScreenHeader } from "../components/screen-header/component";
import { useContacts } from "@/providers/contacts/hook";

export default function CallLog() {
  const {} = useContacts();

  return (
    <View>
      <ScreenHeader title="Call History" />
      {/* <FlatList /> */}
    </View>
  );
}
