import { StyleSheet, Text, View } from "react-native";

import { Persona } from "@/domain/models/Persona";

type PersonaCardProps = {
  persona: Persona;
};

const formatearFecha = (fechaNacimiento: string) => {
  const [anio, mes, dia] = fechaNacimiento.split("-");
  return `${dia}/${mes}/${anio}`;
};

export function PersonaCard({ persona }: PersonaCardProps) {
  return (
    <View style={styles.card}>
      <Text style={styles.eyebrow}>PERSONA DEL DIA</Text>
      <Text style={styles.name}>
        {persona.nombre} {persona.apellidos}
      </Text>
      <View style={styles.divider} />
      <Text style={styles.label}>Fecha de nacimiento</Text>
      <Text style={styles.birthDate}>{formatearFecha(persona.fechaNacimiento)}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: "100%",
    maxWidth: 420,
    padding: 28,
    borderRadius: 20,
    backgroundColor: "#152238",
    shadowColor: "#0B172A",
    shadowOffset: { width: 0, height: 12 },
    shadowOpacity: 0.2,
    shadowRadius: 20,
    elevation: 8,
  },
  eyebrow: {
    marginBottom: 14,
    color: "#F4B942",
    fontSize: 12,
    fontWeight: "700",
    letterSpacing: 1.5,
  },
  name: {
    color: "#FFFFFF",
    fontSize: 30,
    fontWeight: "800",
    lineHeight: 36,
  },
  divider: {
    height: 1,
    marginVertical: 24,
    backgroundColor: "#3C4B62",
  },
  label: {
    marginBottom: 6,
    color: "#AEBACB",
    fontSize: 14,
  },
  birthDate: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "600",
  },
});