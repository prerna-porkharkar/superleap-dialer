import { IconSymbol } from "@/components/ui/IconSymbol";
import { useTheme } from "@react-navigation/native";
import { useNavigation, useRouter } from "expo-router";
import { useCallback } from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import Feather from "@expo/vector-icons/Feather";
import { DEFAULT_TOUCHABLE_OPACITY } from "@/constants";

export const CreateContactButton = () => {
  const { colors } = useTheme();
  const router = useRouter();
  const navigation = useNavigation();

  const onCreate = useCallback(() => {
    router.push('/create-contact')
  }, []);

  return (
    <TouchableOpacity
      onPress={onCreate}
      style={styles.wrapper}
      activeOpacity={DEFAULT_TOUCHABLE_OPACITY}
    >
      <Feather name="user-plus" size={24} color={colors.primary} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  wrapper: {},
});
