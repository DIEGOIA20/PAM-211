import { Text, StyleSheet, View, ScrollView, TouchableOpacity, Alert } from 'react-native'
import React from 'react'

export default function App() {

  const ordenar = (nombre, precio) => {
    Alert.alert(
      "Confirmar orden",
      `Platillo: ${nombre}\nPrecio: $${precio}`,
      [
        { text: "Cancelar", style: "cancel" },
        { text: "Confirmar", onPress: () => console.log("Orden confirmada") }
      ]
    );
  };

  return (
    <View style={styles.container}>

      {/* Encabezado */}
      <Text style={styles.header}>🍽 Restaurante El Buen Sabor</Text>
      <Text style={styles.subheader}>Comida deliciosa al mejor precio</Text>

      {/* Contenido Scroll */}
      <ScrollView style={styles.scroll}>

        {/* Categoría Entradas */}
        <Text style={styles.category}>Entradas</Text>

        <View style={styles.item}>
          <Text style={styles.itemName}>Empanadas</Text>
          <Text style={styles.itemDesc}>Crujientes y rellenas de queso</Text>
          <Text style={styles.price}>$45</Text>
          <TouchableOpacity style={styles.button} onPress={() => ordenar("Empanadas", 45)}>
            <Text style={styles.buttonText}>Ordenar</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.item}>
          <Text style={styles.itemName}>Nuggets</Text>
          <Text style={styles.itemDesc}>Deliciosas piezas de pollo empanizado</Text>
          <Text style={styles.price}>$50</Text>
          <TouchableOpacity style={styles.button} onPress={() => ordenar("Nuggets", 50)}>
            <Text style={styles.buttonText}>Ordenar</Text>
          </TouchableOpacity>
        </View>

        {/* Categoría Postres */}
        <Text style={styles.category}>Postres</Text>

        <View style={styles.item}>
          <Text style={styles.itemName}>Flan</Text>
          <Text style={styles.itemDesc}>Suave y dulce con caramelo</Text>
          <Text style={styles.price}>$40</Text>
          <TouchableOpacity style={styles.button} onPress={() => ordenar("Flan", 40)}>
            <Text style={styles.buttonText}>Ordenar</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.item}>
          <Text style={styles.itemName}>Pastel</Text>
          <Text style={styles.itemDesc}>Rebanada de pastel casero</Text>
          <Text style={styles.price}>$55</Text>
          <TouchableOpacity style={styles.button} onPress={() => ordenar("Pastel", 55)}>
            <Text style={styles.buttonText}>Ordenar</Text>
          </TouchableOpacity>
        </View>

      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#FFF", paddingTop: 40 },
  scroll: { paddingHorizontal: 20 },
  header: { fontSize: 26, fontWeight: "bold", textAlign: "center", marginBottom: 5 },
  subheader: { fontSize: 16, textAlign: "center", marginBottom: 20 },
  category: { fontSize: 22, fontWeight: "bold", marginTop: 20, marginBottom: 10 },
  item: { backgroundColor: "#eee", padding: 15, marginBottom: 15, borderRadius: 10 },
  itemName: { fontSize: 18, fontWeight: "bold" },
  itemDesc: { fontSize: 14, marginVertical: 5 },
  price: { fontWeight: "bold", marginBottom: 10 },
  button: { backgroundColor: "#333", padding: 10, borderRadius: 5, alignItems: "center" },
  buttonText: { color: "white", fontWeight: "bold" }
});
