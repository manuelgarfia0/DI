import { StyleSheet, Text, View } from "react-native";

import { ReloadButton } from "@/presentation/components/ReloadButton";
import { useReload } from "@/presentation/hooks/useReload";

export default function Index() {
  const { isLoaded, isLoading, reload } = useReload();

  return (
    <View style={styles.container}>
      <ReloadButton isLoading={isLoading} onPress={reload} />
      {isLoaded && <Text style={styles.successMessage}>Cargado con éxito</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  successMessage: {
    color: "#237A4B",
    fontSize: 17,
    fontWeight: "600",
    marginTop: 24,
  },
});
