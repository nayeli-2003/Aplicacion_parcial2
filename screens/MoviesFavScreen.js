import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image, ScrollView } from "react-native";

export default function MoviesFavScreen({ navigation }) {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>🎬 Mis Películas Favoritas</Text>

      <View style={styles.card}>

        <View style={styles.movieContainer}>
          <Image source={require("../assets/castillo.jpg")} style={styles.image} />
          <Text style={styles.item}>🎥 Barbie y el Castillo de Diamantes</Text>
        </View>

        <View style={styles.movieContainer}>
          <Image source={require("../assets/las 12.webp")} style={styles.image} />
          <Text style={styles.item}>🦁 Barbie Las 12 Princesas Bailarinas</Text>
        </View>

        <View style={styles.movieContainer}>
          <Image source={require("../assets/frozen.jpeg")} style={styles.image} />
          <Text style={styles.item}>❄️ Frozen</Text>
        </View>

        <View style={styles.movieContainer}>
          <Image source={require("../assets/Bella.jpeg")} style={styles.image} />
          <Text style={styles.item}>👑 La Bella Durmiente</Text>
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
    backgroundColor: "#f3e8ff", // fondo lila suave tipo Barbie
    padding: 20,
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#8e44ad",
  },
  card: {
    width: "100%",
    alignItems: "center",
    marginBottom: 20,
  },
  movieContainer: {
    alignItems: "center",
    marginBottom: 20,
    backgroundColor: "#ffffff",
    padding: 15,
    borderRadius: 20,
    width: "100%",
    elevation: 6,
    shadowColor: "#b983ff",
  },
  image: {
    width: 200,
    height: 280,
    borderRadius: 20,
    marginBottom: 10,
  },
  item: {
    fontSize: 18,
    fontWeight: "600",
    textAlign: "center",
    color: "#5e3370",
  },
  button: {
    backgroundColor: "#ff66c4", // rosa Barbie
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