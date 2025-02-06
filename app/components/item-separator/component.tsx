import { useTheme } from "@react-navigation/native";
import { StyleSheet, View } from "react-native";

export const ItemSeparator = () => {
  const { colors } = useTheme();
  return (
    <View style={[styles.separator, { backgroundColor: colors.border }]} />
  );
};

const styles = StyleSheet.create({
  separator: {
    height: 2,
  },
});
