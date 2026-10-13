import { Pressable, StyleSheet, Text, type PressableProps } from "react-native";

type TextPressableProps = Omit<PressableProps, "children"> & {
  text: string;
};

export function TextPressable({ text, ...props }: TextPressableProps) {
  return (
    <Pressable
      {...props}
      style={({ pressed }) => [styles.button, pressed && styles.pressed]}
    >
      <Text style={styles.label}>{text}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    backgroundColor: "#2563eb",
    borderRadius: 8,
    marginVertical: 6,
    paddingHorizontal: 24,
    paddingVertical: 12,
    width: 220,
  },
  label: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "600",
  },
  pressed: {
    opacity: 0.7,
  },
});