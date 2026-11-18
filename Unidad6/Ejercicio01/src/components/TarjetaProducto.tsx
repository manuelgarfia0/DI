import { useEffect, useRef } from "react";
import {
  Animated,
  Easing,
  Image as ReactNativeImage,
  ImageSourcePropType,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";

type ButtonProps = {
  label: string;
  onPress: () => void;
  color?: string;
};

export function CustomButton({ label, onPress, color = "#007bff" }: ButtonProps) {
  const scale = useRef(new Animated.Value(1)).current;

  const animateScale = (toValue: number) => {
    Animated.spring(scale, {
      damping: 12,
      stiffness: 240,
      toValue,
      useNativeDriver: true,
    }).start();
  };

  return (
    <Pressable
      onPress={onPress}
      onPressIn={() => animateScale(0.94)}
      onPressOut={() => animateScale(1)}
      style={({ pressed }) => [
        { backgroundColor: pressed ? "#163F3A" : color },
      ]}
    >
      <Animated.View style={[styles.button, { transform: [{ scale }] }]}>
        <Text style={styles.text}>{label}</Text>
      </Animated.View>
    </Pressable>
  );
}

type TarjetaProductoProps = {
  name: string;
  price: number;
  Image: ImageSourcePropType;
  onAddToCart: () => void;
  accentColor?: string;
  animationDelay?: number;
};

export function TarjetaProducto({
  name,
  price,
  Image,
  onAddToCart,
  accentColor = "#2A9D8F",
  animationDelay = 0,
}: TarjetaProductoProps) {
  const entrance = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(entrance, {
      delay: animationDelay,
      duration: 650,
      easing: Easing.out(Easing.cubic),
      toValue: 1,
      useNativeDriver: true,
    }).start();
  }, [animationDelay, entrance]);

  return (
    <Animated.View
      style={[
        styles.card,
        {
          opacity: entrance,
          transform: [
            {
              translateY: entrance.interpolate({
                inputRange: [0, 1],
                outputRange: [28, 0],
              }),
            },
            {
              scale: entrance.interpolate({
                inputRange: [0, 1],
                outputRange: [0.92, 1],
              }),
            },
          ],
        },
      ]}
    >
      <View style={[styles.imageFrame, { backgroundColor: `${accentColor}18` }]}>
        <View style={[styles.accentMark, { backgroundColor: accentColor }]} />
        <Text style={[styles.collection, { color: accentColor }]}>SELECCION</Text>
        <ReactNativeImage accessibilityLabel={name} source={Image} style={styles.image} />
      </View>
      <View style={styles.details}>
        <Text numberOfLines={1} style={styles.name}>{name}</Text>
        <Text style={[styles.price, { color: accentColor }]}>{price.toFixed(2)} EUR</Text>
      </View>
      <CustomButton label="Añadir al carrito" onPress={onAddToCart} color={accentColor} />
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#FFFCF7",
    borderColor: "#E8E0D4",
    borderRadius: 24,
    borderWidth: 1,
    elevation: 5,
    overflow: "hidden",
    shadowColor: "#1C1C1C",
    shadowOffset: { height: 7, width: 0 },
    shadowOpacity: 0.1,
    shadowRadius: 14,
    width: "48%",
  },
  imageFrame: {
    height: 150,
    justifyContent: "center",
    margin: 8,
    overflow: "hidden",
    position: "relative",
  },
  accentMark: {
    height: 42,
    position: "absolute",
    right: -12,
    top: -12,
    transform: [{ rotate: "45deg" }],
    width: 42,
  },
  collection: {
    fontSize: 8,
    fontWeight: "900",
    left: 10,
    letterSpacing: 1.2,
    position: "absolute",
    top: 10,
    zIndex: 1,
  },
  image: {
    height: 126,
    width: "100%",
  },
  details: {
    paddingHorizontal: 14,
  },
  name: {
    color: "#14213D",
    fontSize: 15,
    fontWeight: "900",
  },
  price: {
    fontSize: 14,
    fontWeight: "900",
    marginTop: 4,
  },
  button: {
    alignItems: "center",
    borderRadius: 12,
    justifyContent: "center",
    margin: 12,
    minHeight: 40,
    paddingHorizontal: 8,
    width: "auto",
  },
  text: {
    color: "#FFFFFF",
    fontSize: 12,
    fontWeight: "900",
  },
});