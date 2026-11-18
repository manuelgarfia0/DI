import { useEffect, useRef } from "react";
import { Animated, FlatList, Pressable, StyleSheet, Text, View } from "react-native";
import { Product } from "@/domain/entities/Product";
import { TarjetaProducto } from "@/components/TarjetaProducto";

type ProductCatalogViewProps = {
  products: Product[];
  cartItems: number;
  onAddToCart: () => void;
};

export function ProductCatalogView({
  products,
  cartItems,
  onAddToCart,
}: ProductCatalogViewProps) {
  const headerEntrance = useRef(new Animated.Value(0)).current;
  const cartBounce = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    Animated.timing(headerEntrance, {
      duration: 800,
      toValue: 1,
      useNativeDriver: true,
    }).start();
  }, [headerEntrance]);

  useEffect(() => {
    if (cartItems === 0) {
      return;
    }

    Animated.sequence([
      Animated.spring(cartBounce, {
        damping: 5,
        stiffness: 260,
        toValue: 1.16,
        useNativeDriver: true,
      }),
      Animated.spring(cartBounce, {
        damping: 8,
        stiffness: 220,
        toValue: 1,
        useNativeDriver: true,
      }),
    ]).start();
  }, [cartBounce, cartItems]);

  return (
    <View style={styles.container}>
      <View style={styles.topRule} />
      <Animated.View
        style={[
          styles.header,
          {
            opacity: headerEntrance,
            transform: [
              {
                translateY: headerEntrance.interpolate({
                  inputRange: [0, 1],
                  outputRange: [-18, 0],
                }),
              },
            ],
          },
        ]}
      >
        <View>
          <Text style={styles.eyebrow}>DROP  /  01</Text>
          <Text style={styles.title}>Objetos que{`\n`}mueven tu dia.</Text>
        </View>
        <Animated.View style={{ transform: [{ scale: cartBounce }] }}>
          <Pressable accessibilityLabel={`Carrito con ${cartItems} productos`} style={styles.cart}>
            <Text style={styles.cartIcon}>BOLSA</Text>
            <Text style={styles.cartCount}>{cartItems}</Text>
          </Pressable>
        </Animated.View>
      </Animated.View>
      <Animated.View
        style={[
          styles.hero,
          {
            opacity: headerEntrance,
            transform: [{ scale: headerEntrance.interpolate({ inputRange: [0, 1], outputRange: [0.96, 1] }) }],
          },
        ]}
      >
        <View style={styles.heroCopy}>
          <Text style={styles.heroKicker}>CURATED TECH</Text>
          <Text style={styles.subtitle}>Pequenas piezas. Gran impacto.</Text>
        </View>
        <View style={styles.heroBadge}>
          <Text style={styles.heroBadgeNumber}>04</Text>
          <Text style={styles.heroBadgeLabel}>PIEZAS</Text>
        </View>
        <View style={styles.heroStripe} />
      </Animated.View>
      <View style={styles.sectionHeading}>
        <Text style={styles.sectionTitle}>Para ti</Text>
        <Text style={styles.sectionMeta}>NOVEDADES  /  2026</Text>
      </View>
      <FlatList
        columnWrapperStyle={styles.row}
        contentContainerStyle={styles.list}
        data={products}
        keyExtractor={(item) => item.id}
        numColumns={2}
        renderItem={({ item, index }) => (
          <TarjetaProducto
            Image={{ uri: item.imageUrl, width: 600, height: 600 }}
            accentColor={accentColors[index % accentColors.length]}
            animationDelay={index * 100}
            name={item.name}
            onAddToCart={onAddToCart}
            price={item.price}
          />
        )}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F2EEE6",
    paddingHorizontal: 20,
    paddingTop: 44,
  },
  topRule: {
    backgroundColor: "#E76F51",
    height: 4,
    marginBottom: 24,
    width: 54,
  },
  header: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  eyebrow: {
    color: "#2A9D8F",
    fontSize: 10,
    fontWeight: "900",
    letterSpacing: 2.4,
  },
  title: {
    color: "#14213D",
    fontSize: 32,
    fontWeight: "900",
    letterSpacing: 0,
    lineHeight: 34,
    marginTop: 8,
  },
  subtitle: {
    color: "#14213D",
    fontSize: 16,
    fontWeight: "800",
    marginTop: 6,
  },
  cart: {
    alignItems: "center",
    backgroundColor: "#14213D",
    borderRadius: 18,
    gap: 5,
    paddingHorizontal: 10,
    paddingVertical: 11,
  },
  cartIcon: {
    color: "#FFFFFF",
    fontSize: 9,
    fontWeight: "900",
    letterSpacing: 1,
  },
  cartCount: {
    backgroundColor: "#FCA311",
    borderRadius: 10,
    color: "#14213D",
    fontSize: 12,
    fontWeight: "900",
    minWidth: 20,
    overflow: "hidden",
    paddingHorizontal: 5,
    paddingVertical: 2,
    textAlign: "center",
  },
  hero: {
    backgroundColor: "#FCA311",
    borderRadius: 24,
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 28,
    minHeight: 118,
    overflow: "hidden",
    padding: 18,
    position: "relative",
  },
  heroCopy: {
    justifyContent: "center",
    zIndex: 1,
  },
  heroKicker: {
    color: "#14213D",
    fontSize: 10,
    fontWeight: "900",
    letterSpacing: 2,
  },
  heroBadge: {
    alignItems: "center",
    backgroundColor: "#FFFCF7",
    borderRadius: 40,
    height: 74,
    justifyContent: "center",
    marginRight: 4,
    width: 74,
    zIndex: 1,
  },
  heroBadgeNumber: {
    color: "#14213D",
    fontSize: 25,
    fontWeight: "900",
    lineHeight: 27,
  },
  heroBadgeLabel: {
    color: "#E76F51",
    fontSize: 8,
    fontWeight: "900",
    letterSpacing: 1.1,
  },
  heroStripe: {
    backgroundColor: "#E76F51",
    bottom: -34,
    height: 70,
    position: "absolute",
    right: 84,
    transform: [{ rotate: "-28deg" }],
    width: 12,
  },
  sectionHeading: {
    alignItems: "baseline",
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 14,
    marginTop: 26,
  },
  sectionTitle: {
    color: "#14213D",
    fontSize: 21,
    fontWeight: "900",
  },
  sectionMeta: {
    color: "#7B827D",
    fontSize: 9,
    fontWeight: "900",
    letterSpacing: 1.2,
  },
  list: {
    gap: 14,
    paddingBottom: 28,
  },
  row: {
    gap: 14,
  },
});

const accentColors = ["#2A9D8F", "#E76F51", "#577590", "#8A5A44"];
