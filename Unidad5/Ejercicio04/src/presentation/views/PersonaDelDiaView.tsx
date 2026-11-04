import { SafeAreaView, StyleSheet, Text, View } from "react-native";

import { IPersonaUsecase } from "@/domain/interfaces/usecases/IPersonaUsecase";
import { PersonaDelDiaVM } from "@/presentation/viewmodels/PersonaDelDiaVM";

type PersonaDelDiaViewProps = {
  personaUsecase: IPersonaUsecase;
};

export function PersonaDelDiaView({ personaUsecase }: PersonaDelDiaViewProps) {
  const viewModel = new PersonaDelDiaVM(personaUsecase);
  const iniciales = `${viewModel.persona.nombre[0]}${viewModel.persona.apellidos[0]}`;

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.card}>
          <View style={styles.cardTop}>
            <View style={styles.avatar}>
              <Text style={styles.avatarText}>{iniciales}</Text>
            </View>
            <View style={styles.badge}>
              <Text style={styles.badgeText}>PERSONA DEL DIA</Text>
            </View>
          </View>
          <Text style={styles.kicker}>Tu persona de hoy</Text>
          <Text style={styles.name}>{viewModel.nombreCompleto}</Text>
          <View style={styles.divider} />
          <Text style={styles.dateLabel}>FECHA DE NACIMIENTO</Text>
          <Text style={styles.date}>
            {viewModel.persona.fechaNacimiento.toLocaleDateString("es-ES")}
          </Text>
        </View>
        <Text style={styles.footer}>Una historia diferente cada dia</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#F4EFE7",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 22,
  },
  card: {
    padding: 28,
    borderRadius: 24,
    backgroundColor: "#173F4D",
    shadowColor: "#173F4D",
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.22,
    shadowRadius: 18,
    elevation: 8,
  },
  cardTop: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  avatar: {
    width: 68,
    height: 68,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 34,
    backgroundColor: "#E6A65D",
  },
  avatarText: {
    color: "#173F4D",
    fontSize: 24,
    fontWeight: "800",
  },
  badge: {
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 20,
    backgroundColor: "#245A68",
  },
  badgeText: {
    color: "#F7D9A8",
    fontSize: 10,
    fontWeight: "800",
    letterSpacing: 1.2,
  },
  kicker: {
    marginTop: 30,
    color: "#A9C6C9",
    fontSize: 15,
  },
  divider: {
    height: 1,
    marginTop: 24,
    backgroundColor: "#376572",
  },
  name: {
    marginTop: 6,
    color: "#FFFFFF",
    fontSize: 31,
    fontWeight: "800",
    lineHeight: 38,
  },
  dateLabel: {
    marginTop: 22,
    color: "#A9C6C9",
    fontSize: 11,
    fontWeight: "700",
    letterSpacing: 1.2,
  },
  date: {
    marginTop: 7,
    color: "#F7D9A8",
    fontSize: 21,
    fontWeight: "700",
  },
  footer: {
    marginTop: 22,
    alignSelf: "center",
    color: "#7A7166",
    fontSize: 14,
  },
});