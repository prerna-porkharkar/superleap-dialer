import { DEFAULT_TOUCHABLE_OPACITY } from "@/constants";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import { useCallback } from "react";
import { useRouter } from "expo-router";
import { useTheme } from "@react-navigation/native";
import { ThemedView } from "@/components/ThemedView";

export const BackBar = () => {
  const router = useRouter();
  const { colors } = useTheme();

  const onBack = useCallback(() => {
    router.dismiss();
  }, []);

  return (
    <ThemedView style={styles.wrapper}>
      <TouchableOpacity
        activeOpacity={DEFAULT_TOUCHABLE_OPACITY}
        onPress={onBack}
      >
        <FontAwesome6 name="arrow-left" size={24} color={colors.primary} />
      </TouchableOpacity>
    </ThemedView>
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
});
