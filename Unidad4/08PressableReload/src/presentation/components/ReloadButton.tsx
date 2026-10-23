import { ActivityIndicator, Pressable, StyleSheet, Text, View } from "react-native";

type ReloadButtonProps = {
  isLoading: boolean;
  onPress: () => void;
};

export function ReloadButton({ isLoading, onPress }: ReloadButtonProps) {
  return (
    <View style={styles.container}>
      <Pressable
        accessibilityLabel="Recargar"
        accessibilityRole="button"
        android_ripple={{ color: "#D7E3FC" }}
        disabled={isLoading}
        onPress={onPress}
        style={({ pressed }) => [styles.button, pressed && styles.pressed]}
      >
        <Text style={styles.icon}>↻</Text>
        <Text style={styles.label}>Reload</Text>
      </Pressable>
      {isLoading && <ActivityIndicator color="#2457A6" size="large" style={styles.loader} />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  button: {
    alignItems: "center",
    backgroundColor: "#E8F0FE",
    borderRadius: 12,
    flexDirection: "row",
    gap: 10,
    justifyContent: "center",
    minHeight: 56,
    paddingHorizontal: 24,
  },
  icon: {
    color: "#2457A6",
    fontSize: 28,
    lineHeight: 30,
  },
  label: {
    color: "#16345F",
    fontSize: 16,
    fontWeight: "600",
  },
  loader: {
    marginTop: 24,
  },
  pressed: {
    opacity: 0.7,
  },
});