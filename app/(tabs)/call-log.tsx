import { FlatList, StyleSheet, TouchableOpacity, View } from "react-native";
import { ScreenHeader } from "../components/screen-header/component";
import { useContacts } from "@/providers/contacts/hook";
import { CallLog } from "@/types";
import { DEFAULT_TOUCHABLE_OPACITY } from "@/constants";
import { ThemedText } from "@/components/ThemedText";
import { ItemSeparator } from "../components/item-separator/component";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

export default function CallLogScreen() {
  const { callLogs } = useContacts();

  return (
    <View style={styles.wrapper}>
      <ScreenHeader title="Call History" />
      <FlatList
        data={callLogs}
        keyExtractor={(item, index) => `${item.number}_${item.type}_${index}`}
        renderItem={({ item }) => <LogItem item={item} />}
        style={styles.list}
        ItemSeparatorComponent={() => <ItemSeparator />}
      />
    </View>
  );
}

const LogItem = ({ item }: { item: CallLog }) => {
  return (
    <TouchableOpacity
      activeOpacity={DEFAULT_TOUCHABLE_OPACITY}
      style={styles.logItem}
    >
      <ThemedText>{item.number}</ThemedText>

      <View>
        {item.type === "outgoing" ? (
          <MaterialCommunityIcons
            name="phone-outgoing"
            size={24}
            color="black"
          />
        ) : null}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  list: {
    padding: 15,
  },
  logItem: {
    paddingVertical: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
