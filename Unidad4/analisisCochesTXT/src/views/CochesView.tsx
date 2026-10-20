import { useEffect, useState } from "react";
import { Image, Pressable, SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";

import { MarcaCoche } from "@/model/entities/MarcaCoche";
import { ModeloMarca } from "@/model/entities/ModeloMarca";
import { CochesVM } from "@/viewmodel/CochesVM";

type CochesViewProps = { viewModel: CochesVM };

export default function CochesView({ viewModel }: CochesViewProps) {
  const [, setVersion] = useState(viewModel.version);

  useEffect(() => viewModel.subscribe(() => setVersion(viewModel.version)), [viewModel]);

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.kicker}>GARAGE / CATALOGUE</Text>
        <Text style={styles.title}>Elige tu próximo coche.</Text>
        <Text style={styles.subtitle}>Explora marcas, descubre modelos y consulta sus dimensiones.</Text>

        {viewModel.modeloSeleccionado ? (
          <ModeloDetalle modelo={viewModel.modeloSeleccionado} volver={viewModel.volverAModelos.bind(viewModel)} />
        ) : viewModel.marcaSeleccionada ? (
          <ModelosLista
            marca={viewModel.marcaSeleccionada}
            modelos={viewModel.listadoModelos}
            seleccionarModelo={(id) => viewModel.seleccionarModelo(id)}
            volver={viewModel.volverAMarcas.bind(viewModel)}
          />
        ) : (
          <MarcasLista marcas={viewModel.listadoMarcas} seleccionarMarca={(marca) => viewModel.seleccionarMarca(marca)} />
        )}
      </ScrollView>
    </SafeAreaView>
  );
}

function MarcasLista({ marcas, seleccionarMarca }: { marcas: MarcaCoche[]; seleccionarMarca: (marca: MarcaCoche) => void }) {
  return (
    <View>
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>Marcas</Text>
        <Text style={styles.counter}>{marcas.length} disponibles</Text>
      </View>
      {marcas.map((marca, index) => (
        <Pressable key={marca.id} onPress={() => seleccionarMarca(marca)} style={({ pressed }) => [styles.listItem, pressed && styles.pressed]}>
          <Text style={styles.index}>{String(index + 1).padStart(2, "0")}</Text>
          <Text style={styles.itemName}>{marca.nombre}</Text>
          <Text style={styles.arrow}>›</Text>
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
        <Text style={styles.counter}>{modelos.length} modelos</Text>
      </View>
      {modelos.map((modelo) => (
        <Pressable key={modelo.id} onPress={() => seleccionarModelo(modelo.id)} style={({ pressed }) => [styles.modelCard, pressed && styles.pressed]}>
          <Image source={{ uri: modelo.foto }} style={styles.thumbnail} />
          <View style={styles.modelCopy}><Text style={styles.itemName}>{modelo.nombre}</Text><Text style={styles.cardHint}>Ver especificaciones</Text></View>
          <Text style={styles.arrow}>›</Text>
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
      <Text style={styles.overline}>FICHA DEL MODELO</Text>
      <Text style={styles.detailTitle}>{modelo.nombre}</Text>
      <View style={styles.specs}>
        <Spec label="Longitud" value={`${modelo.longitud.toFixed(2)} m`} />
        <Spec label="Anchura" value={`${modelo.anchura.toFixed(2)} m`} />
      </View>
    </View>
  );
}

function Spec({ label, value }: { label: string; value: string }) {
  return <View style={styles.spec}><Text style={styles.specValue}>{value}</Text><Text style={styles.specLabel}>{label}</Text></View>;
}

function BackButton({ label, onPress }: { label: string; onPress: () => void }) {
  return <Pressable onPress={onPress} style={styles.backButton}><Text style={styles.backArrow}>‹</Text><Text style={styles.backText}>{label}</Text></Pressable>;
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: "#f2efe8" },
  container: { paddingHorizontal: 24, paddingTop: 28, paddingBottom: 36 },
  kicker: { color: "#b35f42", fontSize: 11, fontWeight: "800", letterSpacing: 2 },
  title: { color: "#172c2b", fontSize: 34, fontWeight: "800", marginTop: 12 },
  subtitle: { color: "#68716c", fontSize: 15, lineHeight: 22, marginTop: 8, marginBottom: 34 },
  sectionHeader: { alignItems: "flex-end", flexDirection: "row", justifyContent: "space-between", marginBottom: 12 },
  sectionTitle: { color: "#172c2b", fontSize: 25, fontWeight: "800" },
  counter: { color: "#a16c59", fontSize: 12, fontWeight: "700", paddingBottom: 4 },
  listItem: { alignItems: "center", backgroundColor: "#fffdf8", borderBottomColor: "#e8e1d7", borderBottomWidth: 1, flexDirection: "row", minHeight: 70, paddingHorizontal: 18 },
  index: { color: "#b8aaa0", fontSize: 12, fontWeight: "700", width: 38 },
  itemName: { color: "#1d3530", flex: 1, fontSize: 18, fontWeight: "700" },
  arrow: { color: "#b35f42", fontSize: 30, fontWeight: "300" },
  pressed: { opacity: 0.72 },
  backButton: { alignItems: "center", flexDirection: "row", marginBottom: 24 },
  backArrow: { color: "#b35f42", fontSize: 28, marginRight: 8 },
  backText: { color: "#8e5a48", fontSize: 13, fontWeight: "700" },
  overline: { color: "#b35f42", fontSize: 10, fontWeight: "800", letterSpacing: 1.4, marginBottom: 5 },
  modelCard: { alignItems: "center", backgroundColor: "#fffdf8", flexDirection: "row", marginBottom: 12, minHeight: 90, padding: 10 },
  thumbnail: { height: 70, width: 92 },
  modelCopy: { flex: 1, paddingHorizontal: 14 },
  cardHint: { color: "#8a938d", fontSize: 12, marginTop: 5 },
  heroImage: { height: 230, marginBottom: 24, width: "100%" },
  detailTitle: { color: "#172c2b", fontSize: 34, fontWeight: "800", marginBottom: 24 },
  specs: { borderTopColor: "#d9d1c5", borderTopWidth: 1, flexDirection: "row", paddingTop: 20 },
  spec: { flex: 1 },
  specValue: { color: "#1d3530", fontSize: 23, fontWeight: "800" },
  specLabel: { color: "#7b827c", fontSize: 12, marginTop: 5 },
});