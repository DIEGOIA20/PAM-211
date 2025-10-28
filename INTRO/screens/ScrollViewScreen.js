import { Text, StyleSheet, View, ScrollView, } from 'react-native'
import React, { Component } from 'react'


export default function ScrollViewScreen () {
  
    return (

       <View style={styles.container}>
      <ScrollView
        style={styles.scrollArea}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={true}>
        
        <Text style={styles.textRed}>Comparativa entre Xbox y PlayStation</Text>

        <Text style={styles.item}>
          Las consolas Xbox y PlayStation son las dos principales plataformas 
          de videojuegos del mercado actual. Ambas ofrecen potentes gráficos, 
          servicios en línea y una gran variedad de títulos exclusivos.
        </Text>

        <Text style={styles.title}>Diferencias principales</Text>
        <Text style={styles.title}>
          Xbox, desarrollada por Microsoft, está muy enfocada en la 
          integración con servicios digitales y el ecosistema de PC.  
          Por otro lado, PlayStation, creada por Sony, se distingue por 
          su catálogo exclusivo y su enfoque cinematográfico en los juegos.
        </Text>

        <Text style={styles.textRed}>Ventajas de Xbox</Text>
        <Text style={styles.title}>Game Pass: acceso a cientos de juegos por suscripción.</Text>
        <Text style={styles.title}>Compatibilidad con generaciones anteriores.</Text>
        <Text style={styles.title}>Integración con Windows y Xbox Cloud Gaming.</Text>

        <Text style={styles.textRed}>Ventajas de PlayStation</Text>
        <Text style={styles.title}> Exclusivos de alta calidad como God of War, Spider-Man y The Last of Us.</Text>
        <Text style={styles.title}> DualSense: control con retroalimentación háptica avanzada.</Text>
        <Text style={styles.title}> Experiencia inmersiva gracias a su ecosistema y diseño de interfaz.</Text>

        <Text style={styles.textRed}>Conclusión</Text>
        <Text style={styles.title}>
          Ambas consolas ofrecen experiencias increíbles.  
          Xbox destaca por su servicio y rendimiento, mientras que 
          PlayStation sobresale por sus juegos exclusivos y su enfoque narrativo.  
          La elección depende del tipo de jugador y las preferencias personales.
        </Text>

      </ScrollView>
    </View>
    )
  
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: 'white',
  },
  scrollArea:{
    flex:1,
  },
  item:{
    backgroundColor: 'purple',
    color: 'white',
    padding:12,
    marginVertical:8,
    borderRadius:10,
    textAlign:'center',
  },
  scrollContenet:{
    alignItems:'center',
    paddingVertical:20,
  },
  title:{
    fontSize:30,
    fontWeight: 'bold',
    color: '#000000ff',
    textAlign:'center',
    marginBottom:20,
  },
  
  subtitleRed:{
    fontSize:22,
    fontWeight:'bold',
    color:'white',
    textAlign:'center',
    backgroundColor: 'red',
    borderRadius:10,
    marginVertical:12,
    paddingVertical:12,
    paddingHorizontal:10,
    width:'95%',
    alignSelf:'center',
  },
  text:{
    fontSize:16,
    color:'white',
    lineHeight:24,
    textAlign:'justify',
    marginBottom:15,
    padding:10,
  },
  textRed:{
    fontSize:16,
    color:'white',
    lineHeight:24,
    textAlign: 'justify',
    marginBottom:15,
    padding:10,
    backgroundColor:'red',
    borderRadius:10,
    textAlign:'center',

  },
})