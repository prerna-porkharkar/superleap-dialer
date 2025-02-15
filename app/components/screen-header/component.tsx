import { ThemedText } from "@/components/ThemedText";
import { useTheme } from "@react-navigation/native";
import { ReactNode } from "react";
import { StyleSheet, View, Text } from "react-native";

export const ScreenHeader = ({
  title,
  ActionButton,
}: {
  title: string;
  ActionButton?: ReactNode;
}) => {
  const { colors } = useTheme();

  return (
    <View style={[styles.wrapper, { backgroundColor: colors.background }]}>
      <ThemedText style={styles.title}>{title}</ThemedText>

      <View>{ActionButton}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    padding: 15,
    alignItems: "center",
    paddingTop: 35,
  },
  title: {
    fontSize: 24,
  },
});
