import { Text, StyleSheet, View, ScrollView, TouchableOpacity, ImageBackground, Image, Platform } from 'react-native'
import React from 'react'

const BackgroundImage = require('./assets/Fondo.jpg');

export default function App() {

  const ordenar = (nombre, precio) => {
    const mensaje = `Clima y Hora\n\nCiudad: ${nombre}\nTemperatura: ${precio}°C\n\n¿Deseas confirmar?`;
    if (window.confirm(mensaje)) {
      alert("✓ Clima y Hora Visualizada correctamente");
    }
  };

  return (
    <View style={styles.container}>
      <ImageBackground source={BackgroundImage} 
                style={styles.background}
                resizeMode="cover"> 


      {/* Encabezado */}
      <Text style={styles.header}>Clima Actual</Text>
      <Text style={styles.subheader}>7:00 pm</Text>

      <ScrollView style={styles.scroll}>

        <Text style={styles.category}>Latinoamerica</Text>

        <View style={styles.item}>
          <Image source={require('./assets/icon.png')} style={styles.itemImage} />
          <View style={styles.itemContent}>
            <Text style={styles.itemName}>Mexico</Text>
            <Text style={styles.itemDesc}>Soleado</Text>
            <Text style={styles.price}>35.C</Text>
            <TouchableOpacity style={styles.button} onPress={() => ordenar("Mexico", 35)}>
              <Text style={styles.buttonText}>Ver detalles</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.item}>
          <Image source={require('./assets/icon.png')} style={styles.itemImage} />
          <View style={styles.itemContent}>
            <Text style={styles.itemName}>Argentina</Text>
            <Text style={styles.itemDesc}>Nublado</Text>
            <Text style={styles.price}>30.c</Text>
            <TouchableOpacity style={styles.button} onPress={() => ordenar("Argentina", 30)}>
              <Text style={styles.buttonText}>Ver detalles</Text>
            </TouchableOpacity>
          </View>
        </View>

        <Text style={styles.category}>Europa</Text>

        <View style={styles.item}>
          <Image source={require('./assets/icon.png')} style={styles.itemImage} />
          <View style={styles.itemContent}>
            <Text style={styles.itemName}>Francia</Text>
            <Text style={styles.itemDesc}>Parcialmente soleado</Text>
            <Text style={styles.price}>34.c</Text>
            <TouchableOpacity style={styles.button} onPress={() => ordenar("Francia", 34)}>
              <Text style={styles.buttonText}>Ver detalles</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.item}>
          <Image source={require('./assets/icon.png')} style={styles.itemImage} />
          <View style={styles.itemContent}>
            <Text style={styles.itemName}>España</Text>
            <Text style={styles.itemDesc}>Lluvia ligera</Text>
            <Text style={styles.price}>29.c</Text>
            <TouchableOpacity style={styles.button} onPress={() => ordenar("España", 29)}>
              <Text style={styles.buttonText}>Ver detalles</Text>
            </TouchableOpacity>
          </View>
        </View>

      </ScrollView>
      </ImageBackground>
    </View>
  )
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  background: { flex: 1, paddingTop: 40 },
  scroll: { paddingHorizontal: 20 },
  header: { fontSize: 26, fontWeight: "bold", textAlign: "center", marginBottom: 5, color: "#FFF", textShadowColor: 'rgba(0, 0, 0, 0.75)', textShadowOffset: {width: -1, height: 1}, textShadowRadius: 10 },
  subheader: { fontSize: 16, textAlign: "center", marginBottom: 20, color: "#FFF", textShadowColor: 'rgba(0, 0, 0, 0.75)', textShadowOffset: {width: -1, height: 1}, textShadowRadius: 10 },
  category: { fontSize: 22, fontWeight: "bold", marginTop: 20, marginBottom: 10, color: "#FFF", textShadowColor: 'rgba(0, 0, 0, 0.75)', textShadowOffset: {width: -1, height: 1}, textShadowRadius: 10 },
  item: { backgroundColor: "rgba(255, 255, 255, 0.9)", padding: 15, marginBottom: 15, borderRadius: 10, flexDirection: "row", alignItems: "flex-start" },
  itemImage: { width: 80, height: 80, borderRadius: 10, marginRight: 15 },
  itemContent: { flex: 1 },
  itemName: { fontSize: 18, fontWeight: "bold" },
  itemDesc: { fontSize: 14, marginVertical: 5 },
  price: { fontWeight: "bold", marginBottom: 10 },
  button: { backgroundColor: "#007AFF", paddingVertical: 10, paddingHorizontal: 20, borderRadius: 8, alignItems: "center", elevation: 3, shadowColor: "#000", shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.25, shadowRadius: 3.84 },
  buttonText: { color: "white", fontWeight: "bold", fontSize: 14 },
});
