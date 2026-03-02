import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

export default function Counter({ navigation }) {
  const [count, setCount] = useState(0);

  return (
    <View style={styles.container}>
      
      <Text style={styles.title}>Contador</Text>

      <Text style={styles.counter}>{count}</Text>

      {/* Botones principales */}
      <View style={styles.row}>
        <TouchableOpacity
          style={styles.buttonIncrease}
          onPress={() => setCount(count + 1)}
        >
          <Text style={styles.buttonText}>➕ Incrementar</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.buttonDecrease}
          onPress={() => setCount(count - 1)}
        >
          <Text style={styles.buttonText}>➖ Disminuir</Text>
        </TouchableOpacity>
      </View>

      {/* Reiniciar */}
      <TouchableOpacity
        style={styles.buttonReset}
        onPress={() => setCount(0)}
      >
        <Text style={styles.buttonText}>🔄 Reiniciar</Text>
      </TouchableOpacity>

      {/* Enviar a ExampleEvent */}
      <TouchableOpacity
        style={styles.buttonSend}
        onPress={() =>
          navigation.navigate("ExampleEvent", { contador: count })
        }
      >
        <Text style={styles.buttonText}>
          📤 Enviar contador a Eventos
        </Text>
      </TouchableOpacity>

      {/* Volver a Home */}
      <TouchableOpacity
        style={styles.buttonHome}
        onPress={() => navigation.navigate("Home")}
      >
        <Text style={styles.buttonText}>🏠 Volver a Inicio</Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#eef2f3",
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 20,
  },
  counter: {
    fontSize: 50,
    fontWeight: "bold",
    marginBottom: 30,
    color: "#002063",
  },
  row: {
    flexDirection: "row",
    marginBottom: 20,
  },
  buttonIncrease: {
    backgroundColor: "#4c72af",
    padding: 15,
    borderRadius: 10,
    marginRight: 10,
  },
  buttonDecrease: {
    backgroundColor: "#3aa1a4",
    padding: 15,
    borderRadius: 10,
  },
  buttonReset: {
    backgroundColor: "#5e99bc",
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
    width: 250,
    alignItems: "center",
  },
  buttonSend: {
    backgroundColor: "#5e5890",
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
    width: 250,
    alignItems: "center",
  },
  buttonHome: {
    backgroundColor: "#9e5d93",
    padding: 15,
    borderRadius: 10,
    width: 250,
    alignItems: "center",
  },
  buttonText: {
    color: "#ffe5e5",
    fontWeight: "bold",
  },
});