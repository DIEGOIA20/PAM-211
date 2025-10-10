//1 Imports: Zona de Imports
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import React,{ useState } from 'react';

//2 Main: Zona del Componente
export default function ContadorScreen() {
  const[contador, setContador] = useState(0);
  return (

    <View style={styles.container}>

      <Text style={styles.texto}>Contador:</Text>
      <Text style={styles.texto2}>{contador}</Text>

      <View style={styles.botonesContainer}>
      <Button color='red' title='Agregar' onPress={() => setContador(contador + 1)}/>
        <Button color='gold' title='Quitar' onPress={() => setContador(contador - 1)}/>
          <Button color='orange' title='Reiniciar' onPress={() => setContador(0)}/> 
        </View>

      <StatusBar style="auto" />

    </View>
  );
}

//3 Styles: Zona de Estilos para el Componente
const styles = StyleSheet.create({
  container: {
    flex: 1, //Toma toda la pantalla
    backgroundColor: '#ea34e4da',
    alignItems: 'center', //Alineación Horizontal
    justifyContent: 'center', //Alineación Vertical
    
  }, 
  texto:{
    color: '#2c00deff',
    fontSize: 30, //Tamaño
    fontFamily: 'Times New Roman', //Tipo de Letra
    fontWeight: 'bold', //Grosor de la letra
    textDecorationLine: 'Line-through' //Decoración de la letra (underline, line-through, none)
  },
   texto2:{
    color: '#fc0303e6',
    fontSize: 40, //Tamaño
    fontFamily: 'courier', //Tipo de Letra
    fontWeight: '300', //Grosor de la letra
    fontStyle: 'italic', //Estilo de la letra (normal, italic)
    textDecorationLine: 'underline' //Decoración de la letra (underline, line-through, none)
  },
  botonesContainer:{
    marginTop: 20,
    flexDirection: 'row', //Fila o Columna (row, column)
    gap: 20 //Espacio entre los elementos (solo en React Native 0.71 o superior)
  }



});
