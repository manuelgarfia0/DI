import { useEffect, useState } from "react";
import { Animated, Image, ImageBackground, Pressable, SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";

import { MarcaCoche } from "@/model/entities/MarcaCoche";
import { ModeloMarca } from "@/model/entities/ModeloMarca";
import { CochesVM } from "@/viewmodel/CochesVM";

type CochesViewProps = { viewModel: CochesVM };

export default function CochesView({ viewModel }: CochesViewProps) {
  const [marcaSeleccionada, setMarcaSeleccionada] = useState<MarcaCoche | null>(null);
  const [modeloSeleccionado, setModeloSeleccionado] = useState<ModeloMarca | null>(null);
  const [entrance] = useState(() => new Animated.Value(0));

  useEffect(() => {
    Animated.spring(entrance, {
      toValue: 1,
      friction: 8,
      tension: 45,
      useNativeDriver: true,
    }).start();
  }, [entrance]);

  const seleccionarMarca = (marca: MarcaCoche) => {
    viewModel.seleccionarMarca(marca);
    setMarcaSeleccionada(marca);
    setModeloSeleccionado(null);
  };

  const seleccionarModelo = (idModelo: number) => {
    viewModel.seleccionarModelo(idModelo);
    setModeloSeleccionado(viewModel.modeloSeleccionado);
  };

  const volverAMarcas = () => {
    viewModel.volverAMarcas();
    setMarcaSeleccionada(null);
    setModeloSeleccionado(null);
  };

  const volverAModelos = () => {
    viewModel.volverAModelos();
    setModeloSeleccionado(null);
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.topBar}>
          <View style={styles.logoMark}><Text style={styles.logoText}>G</Text></View>
          <View style={styles.topBarCopy}><Text style={styles.kicker}>GARAGE / CATALOGUE</Text><Text style={styles.topBarTitle}>MOTION HOUSE</Text></View>
          <View style={styles.live}><View style={styles.liveDot} /><Text style={styles.liveText}>LIVE</Text></View>
        </View>

        <Animated.View style={{ opacity: entrance, transform: [{ translateY: entrance.interpolate({ inputRange: [0, 1], outputRange: [22, 0] }) }] }}>
          {modeloSeleccionado ? (
            <ModeloDetalle modelo={modeloSeleccionado} volver={volverAModelos} />
          ) : marcaSeleccionada ? (
            <ModelosLista
              marca={marcaSeleccionada}
              modelos={viewModel.listadoModelos}
              seleccionarModelo={seleccionarModelo}
              volver={volverAMarcas}
            />
          ) : (
            <MarcasLista marcas={viewModel.listadoMarcas} seleccionarMarca={seleccionarMarca} />
          )}
        </Animated.View>
      </ScrollView>
    </SafeAreaView>
  );
}

function MarcasLista({ marcas, seleccionarMarca }: { marcas: MarcaCoche[]; seleccionarMarca: (marca: MarcaCoche) => void }) {
  return (
    <View>
      <ImageBackground
        source={{ uri: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=1400" }}
        imageStyle={styles.bannerImage}
        style={styles.banner}
      >
        <View style={styles.bannerShade} />
        <View style={styles.bannerContent}>
          <Text style={styles.bannerKicker}>THE OPEN ROAD</Text>
          <Text style={styles.bannerTitle}>Encuentra tu próxima historia.</Text>
          <Text style={styles.bannerText}>Marcas que convierten cada trayecto en una experiencia.</Text>
        </View>
      </ImageBackground>
      <View style={styles.sectionHeader}>
        <View><Text style={styles.overline}>EXPLORA EL CATÁLOGO</Text><Text style={styles.sectionTitle}>Elige una marca</Text></View>
        <View style={styles.countBadge}><Text style={styles.counter}>{marcas.length}</Text><Text style={styles.countLabel}>MARCAS</Text></View>
      </View>
      <View style={styles.catalogStats}>
        <View style={styles.statBlock}><Text style={styles.statValue}>{marcas.length}</Text><Text style={styles.statLabel}>MARCAS</Text></View>
        <View style={styles.statDivider} />
        <View style={styles.statBlock}><Text style={styles.statValue}>07</Text><Text style={styles.statLabel}>MODELOS</Text></View>
        <View style={styles.statDivider} />
        <View style={styles.statBlock}><Text style={styles.statValue}>∞</Text><Text style={styles.statLabel}>DESTINOS</Text></View>
      </View>
      {marcas.map((marca, index) => (
        <Pressable key={marca.id} onPress={() => seleccionarMarca(marca)} style={({ pressed }) => [styles.brandCard, index === 0 && styles.featuredBrand, pressed && styles.pressed]}>
          <View style={[styles.brandBadge, { backgroundColor: brandColors[index % brandColors.length] }]}><Text style={styles.brandInitial}>{marca.nombre.charAt(0)}</Text></View>
          <View style={styles.brandCopy}><Text style={styles.index}>0{index + 1} / BRAND</Text><Text style={styles.itemName}>{marca.nombre}</Text><Text style={styles.brandHint}>{index === 0 ? "Selección destacada" : "Explorar modelos"}</Text></View>
          <View style={styles.roundArrow}><Text style={styles.arrow}>›</Text></View>
        </Pressable>
      ))}
    </View>
  );
}

function ModelosLista({ marca, modelos, seleccionarModelo, volver }: { marca: MarcaCoche; modelos: ModeloMarca[]; seleccionarModelo: (id: number) => void; volver: () => void }) {
  return (
    <View>
      <BackButton label="Todas las marcas" onPress={volver} />
      <View style={styles.sectionHeader}>
        <View><Text style={styles.overline}>MARCA SELECCIONADA</Text><Text style={styles.sectionTitle}>{marca.nombre}</Text></View>
        <View style={styles.countBadge}><Text style={styles.counter}>{modelos.length}</Text><Text style={styles.countLabel}>MODELOS</Text></View>
      </View>
      {modelos.map((modelo) => (
        <Pressable key={modelo.id} onPress={() => seleccionarModelo(modelo.id)} style={({ pressed }) => [styles.modelCard, pressed && styles.pressed]}>
          <Image source={{ uri: modelo.foto }} style={styles.thumbnail} />
          <View style={styles.modelCopy}><Text style={styles.itemName}>{modelo.nombre}</Text><Text style={styles.cardHint}>Ver especificaciones</Text></View>
          <View style={styles.modelArrow}><Text style={styles.arrow}>↗</Text></View>
        </Pressable>
      ))}
    </View>
  );
}

function ModeloDetalle({ modelo, volver }: { modelo: ModeloMarca; volver: () => void }) {
  return (
    <View>
      <BackButton label="Volver a los modelos" onPress={volver} />
      <Image source={{ uri: modelo.foto }} style={styles.heroImage} />
      <View style={styles.detailHeading}><View><Text style={styles.overline}>FICHA DEL MODELO</Text><Text style={styles.detailTitle}>{modelo.nombre}</Text></View><View style={styles.featurePill}><Text style={styles.featurePillText}>01</Text></View></View>
      <Text style={styles.detailIntro}>Diseñado para moverse con carácter. Estas son sus dimensiones principales.</Text>
      <View style={styles.specs}>
        <Spec label="Longitud" value={`${modelo.longitud.toFixed(2)} m`} />
        <Spec label="Anchura" value={`${modelo.anchura.toFixed(2)} m`} />
      </View>
    </View>
  );
}

function Spec({ label, value }: { label: string; value: string }) {
  return <View style={styles.spec}><View style={styles.specIcon}><Text style={styles.specIconText}>{label === "Longitud" ? "↔" : "↕"}</Text></View><Text style={styles.specLabel}>{label.toUpperCase()}</Text><Text style={styles.specValue}>{value}</Text></View>;
}

function BackButton({ label, onPress }: { label: string; onPress: () => void }) {
  return <Pressable onPress={onPress} style={({ pressed }) => [styles.backButton, pressed && styles.pressed]}><Text style={styles.backArrow}>←</Text><Text style={styles.backText}>{label}</Text></Pressable>;
}

const brandColors = ["#ed765b", "#d9e45a", "#5a9da0", "#e7b55e", "#c78dbe"];

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: "#10252a" },
  container: { paddingHorizontal: 20, paddingTop: 20, paddingBottom: 42 },
  topBar: { alignItems: "center", flexDirection: "row", marginBottom: 28 },
  logoMark: { alignItems: "center", backgroundColor: "#d9e45a", height: 40, justifyContent: "center", width: 40 },
  logoText: { color: "#10252a", fontSize: 25, fontWeight: "900" },
  topBarCopy: { flex: 1, marginLeft: 12 },
  kicker: { color: "#d9e45a", fontSize: 10, fontWeight: "800", letterSpacing: 1.8 },
  topBarTitle: { color: "#f8f3e8", fontSize: 15, fontWeight: "800", letterSpacing: 1.5, marginTop: 3 },
  live: { alignItems: "center", borderColor: "#355159", borderWidth: 1, flexDirection: "row", paddingHorizontal: 9, paddingVertical: 6 },
  liveDot: { backgroundColor: "#ed765b", height: 6, marginRight: 6, width: 6 },
  liveText: { color: "#b8c8c3", fontSize: 9, fontWeight: "800", letterSpacing: 1 },
  banner: { height: 230, justifyContent: "flex-end", marginBottom: 32, overflow: "hidden" },
  bannerImage: { opacity: 0.82 },
  bannerShade: { ...StyleSheet.absoluteFill, backgroundColor: "#07181ccc" },
  bannerContent: { padding: 22 },
  bannerKicker: { color: "#d9e45a", fontSize: 10, fontWeight: "800", letterSpacing: 2 },
  bannerTitle: { color: "#fffaf0", fontSize: 28, fontWeight: "800", lineHeight: 31, marginTop: 8, maxWidth: 280 },
  bannerText: { color: "#d5dfd9", fontSize: 13, lineHeight: 19, marginTop: 9, maxWidth: 275 },
  sectionHeader: { alignItems: "flex-end", flexDirection: "row", justifyContent: "space-between", marginBottom: 15 },
  sectionTitle: { color: "#f8f3e8", fontSize: 26, fontWeight: "800" },
  overline: { color: "#ed765b", fontSize: 10, fontWeight: "800", letterSpacing: 1.5, marginBottom: 5 },
  countBadge: { alignItems: "center", backgroundColor: "#1d3a40", minWidth: 58, paddingHorizontal: 8, paddingVertical: 7 },
  counter: { color: "#d9e45a", fontSize: 18, fontWeight: "800" },
  countLabel: { color: "#8fa7a4", fontSize: 8, fontWeight: "800", letterSpacing: 1, marginTop: 2 },
  catalogStats: { alignItems: "center", backgroundColor: "#d9e45a", flexDirection: "row", justifyContent: "space-around", marginBottom: 18, minHeight: 76, paddingHorizontal: 8 },
  statBlock: { alignItems: "center", flex: 1 },
  statValue: { color: "#10252a", fontSize: 22, fontWeight: "900" },
  statLabel: { color: "#3d5b58", fontSize: 8, fontWeight: "900", letterSpacing: 1.1, marginTop: 3 },
  statDivider: { backgroundColor: "#91a33c", height: 33, width: 1 },
  brandCard: { alignItems: "center", backgroundColor: "#173239", flexDirection: "row", marginBottom: 10, minHeight: 82, padding: 12 },
  featuredBrand: { borderColor: "#ed765b", borderWidth: 1 },
  brandBadge: { alignItems: "center", height: 56, justifyContent: "center", width: 56 },
  brandInitial: { color: "#10252a", fontSize: 27, fontWeight: "900" },
  brandCopy: { flex: 1, paddingHorizontal: 15 },
  index: { color: "#78918f", fontSize: 9, fontWeight: "800", letterSpacing: 1.3, marginBottom: 6 },
  itemName: { color: "#f8f3e8", flex: 1, fontSize: 20, fontWeight: "800" },
  brandHint: { color: "#8fa7a4", fontSize: 11, marginTop: 4 },
  roundArrow: { alignItems: "center", borderColor: "#527177", borderRadius: 16, borderWidth: 1, height: 32, justifyContent: "center", width: 32 },
  arrow: { color: "#d9e45a", fontSize: 23, fontWeight: "300" },
  pressed: { opacity: 0.72 },
  backButton: { alignItems: "center", flexDirection: "row", marginBottom: 24 },
  backArrow: { color: "#d9e45a", fontSize: 23, marginRight: 9 },
  backText: { color: "#a9bfba", fontSize: 13, fontWeight: "700" },
  modelCard: { alignItems: "center", backgroundColor: "#173239", flexDirection: "row", marginBottom: 12, minHeight: 96, padding: 10 },
  thumbnail: { height: 76, width: 105 },
  modelCopy: { flex: 1, paddingHorizontal: 14 },
  cardHint: { color: "#8fa7a4", fontSize: 12, marginTop: 5 },
  modelArrow: { alignItems: "center", backgroundColor: "#ed765b", height: 32, justifyContent: "center", width: 32 },
  heroImage: { height: 265, marginBottom: 22, width: "100%" },
  detailHeading: { alignItems: "flex-start", flexDirection: "row", justifyContent: "space-between" },
  detailTitle: { color: "#f8f3e8", fontSize: 35, fontWeight: "800", marginBottom: 12 },
  featurePill: { alignItems: "center", backgroundColor: "#d9e45a", height: 42, justifyContent: "center", width: 42 },
  featurePillText: { color: "#10252a", fontSize: 16, fontWeight: "900" },
  detailIntro: { color: "#a9bfba", fontSize: 14, lineHeight: 21, marginBottom: 25, maxWidth: 310 },
  specs: { flexDirection: "row", gap: 10 },
  spec: { backgroundColor: "#173239", flex: 1, minHeight: 130, padding: 14 },
  specIcon: { alignItems: "center", borderColor: "#527177", borderWidth: 1, height: 28, justifyContent: "center", marginBottom: 18, width: 28 },
  specIconText: { color: "#d9e45a", fontSize: 16 },
  specValue: { color: "#f8f3e8", fontSize: 22, fontWeight: "800", marginTop: 7 },
  specLabel: { color: "#8fa7a4", fontSize: 9, fontWeight: "800", letterSpacing: 1.2 },
});