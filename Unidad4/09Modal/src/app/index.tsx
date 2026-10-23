import { useState } from "react";
import {
  Alert,
  Button,
  Modal,
  StyleSheet,
  Text,
  View,
} from "react-native";

type ModalOption = "Aceptar" | "Cancelar";

export default function Index() {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleModalOption = (option: ModalOption) => {
    setIsModalVisible(false);
    Alert.alert("Resultado", `Ha pulsado usted ${option}`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Ejercicio Modal</Text>
      <Button title="Abrir modal" onPress={() => setIsModalVisible(true)} />

      <Modal
        animationType="slide"
        transparent
        visible={isModalVisible}
        onRequestClose={() => handleModalOption("Cancelar")}
      >
        <View style={styles.overlay}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>¿Desea continuar?</Text>
            <View style={styles.buttonRow}>
              <Button
                title="Aceptar"
                onPress={() => handleModalOption("Aceptar")}
              />
              <Button
                title="Cancelar"
                onPress={() => handleModalOption("Cancelar")}
              />
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    gap: 16,
    padding: 24,
  },
  title: {
    fontSize: 24,
    fontWeight: "700",
  },
  overlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(0, 0, 0, 0.45)",
    padding: 24,
  },
  modalContent: {
    width: "100%",
    maxWidth: 360,
    gap: 24,
    borderRadius: 12,
    backgroundColor: "white",
    padding: 24,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: "600",
    textAlign: "center",
  },
  buttonRow: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
});
