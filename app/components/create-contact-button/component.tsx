import { IconSymbol } from "@/components/ui/IconSymbol";
import { useTheme } from "@react-navigation/native";
import { useCallback } from "react";
import { TouchableOpacity } from "react-native";

export const CreateContactButton = () => {
  const { colors } = useTheme();

  const onCreate = useCallback(() => {}, []);

  return (
    <TouchableOpacity onPress={onCreate}>
      <IconSymbol size={24} name="person.badge.plus" color={colors.primary} />
    </TouchableOpacity>
  );
};
