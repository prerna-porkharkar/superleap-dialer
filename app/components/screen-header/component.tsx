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
      <Text style={styles.title}>{title}</Text>

      <View>{ActionButton}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    justifyContent: "space-between",
    width: "100%",
    padding: 15,
  },
  title: {
    fontSize: 24,
  },
});
