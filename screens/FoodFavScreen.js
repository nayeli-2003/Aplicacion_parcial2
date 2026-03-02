import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image, ScrollView } from "react-native";

export default function FoodFavScreen({ navigation }) {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>🍽️ Mis Comidas Favoritas</Text>

      <View style={styles.card}>

        <View style={[styles.foodContainer, styles.spagueti]}>
          <Image source={require("../assets/spagueti.jpeg")} style={styles.image} />
          <Text style={styles.item}>🍝 Spagueti</Text>
        </View>

        <View style={[styles.foodContainer, styles.pollo]}>
          <Image source={require("../assets/pollo.jpg")} style={styles.image} />
          <Text style={styles.item}>🍗 Pollo Asado</Text>
        </View>

        <View style={[styles.foodContainer, styles.camarones]}>
          <Image source={require("../assets/camarones.webp")} style={styles.image} />
          <Text style={styles.item}>🍤 Camarones</Text>
        </View>

        <View style={[styles.foodContainer, styles.quesadillas]}>
          <Image source={require("../assets/quesadilla.jpg")} style={styles.image} />
          <Text style={styles.item}>🫓 Quesadillas</Text>
        </View>

      </View>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.buttonText}>⬅ Volver</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff8f0",
    padding: 20,
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#8b0000",
  },
  card: {
    width: "100%",
    alignItems: "center",
    marginBottom: 20,
  },
  foodContainer: {
    alignItems: "center",
    marginBottom: 20,
    padding: 15,
    borderRadius: 20,
    width: "100%",
    elevation: 6,
  },
  spagueti: {
    backgroundColor: "#ffdad4", 
  },
  pollo: {
    backgroundColor: "#ffe5b4", 
  },
  camarones: {
    backgroundColor: "#ffd1c1", 
  },
  quesadillas: {
    backgroundColor: "#fff3b0", 
  },
  image: {
    width: 180,
    height: 180,
    borderRadius: 20,
    marginBottom: 10,
  },
  item: {
    fontSize: 18,
    fontWeight: "600",
    color: "#4a2c2a",
  },
  button: {
    backgroundColor: "#8b0000",
    padding: 15,
    borderRadius: 12,
    width: 200,
    alignItems: "center",
    elevation: 5,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
});