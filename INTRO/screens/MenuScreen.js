import React, { useState } from 'react'
import { Text, StyleSheet, View,Button } from 'react-native'
import BotonesScreen from './BotonesScreen'
import ContadorScreen from './ContadorScreen'
import TextScreen from './TextScreen'
import ImagenScreen from './ImagenScreen'
import RepasoScreen from './RepasoScreen'
import ScrollViewScreen from './ScrollViewScreen'
import ActivityScreen from './ActivityScreen'
import ListScreen from './ListScreen'
import ModalScreen from './ModalScreen'
import PresupuestosScreen from './PresupuestosScreen'
import NotificacionesScreen from './NotificacionesScreen'




export default function MenuScreen() {
    const [Screen, setScreen] = useState('menu');

    switch (Screen) {
    case 'contador':
        return <ContadorScreen />;
     
    case 'botones':
        return <BotonesScreen />;

        case 'text':
        return <TextScreen />;

         case 'imagen':
        return <ImagenScreen />

         case 'repaso':
        return <RepasoScreen />;

         case 'scrollView':
        return <ScrollViewScreen />;

        case 'Activity':
        return <ActivityScreen />;

        case 'list':
        return <ListScreen />;

        case 'modal':
        return <ModalScreen />;

        case 'presupuestos':
        return <PresupuestosScreen  />;

        case 'notificaciones':
        return <NotificacionesScreen  />;

         case 'menu': 
    default:
         return (
           <View style={styles.container}>
             <Text style={styles.title}>Menu de Prácticas</Text>
              <View style={styles.buttonWrapper}>
               <Button onPress={() => setScreen('contador')} title='Práctica Contador'/>
             </View>
             <View style={styles.buttonWrapper}>
               <Button onPress={() => setScreen('botones')} title='Práctica Botones'/>
             </View>
              <View style={styles.buttonWrapper}>
               <Button onPress={() => setScreen('text')} title='Práctica Text'/>
             </View>
              <View style={styles.buttonWrapper}>
               <Button onPress={() => setScreen('imagen')} title='Practica Imagen'/>
             </View>
               <View style={styles.buttonWrapper}>
               <Button onPress={() => setScreen('repaso')} title='Practica Repaso'/>
             </View>
              <View style={styles.buttonWrapper}>
               <Button onPress={() => setScreen('scrollView')} title='Practica ScrollView'/>
             </View>
              <View style={styles.buttonWrapper}>
               <Button onPress={() => setScreen('Activity')} title='Practica Activity'/>
             </View>
             <View style={styles.buttonWrapper}>
               <Button onPress={() => setScreen('list')} title='Practica List'/>
             </View>
             <View style={styles.buttonWrapper}>
               <Button onPress={() => setScreen('modal')} title='Practica Modal'/>
             </View>
             <View style={styles.buttonWrapper}>
               <Button onPress={() => setScreen('presupuestos')} title='Practica Presupuestos'/>
             </View>
             <View style={styles.buttonWrapper}>
               <Button onPress={() => setScreen('notificaciones')} title='Practica Notificaciones'/>
             </View>
           </View>
         )  
        }
 
  
}

//3 Styles: Zona de Estilos para el Componente
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
    alignItems: 'center', // Alineación horizontal
    justifyContent: 'center', // Alineación vertical
    paddingHorizontal: 20,
    backgroundColor: '#fff'
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 24,
    textAlign: 'center'
  },
  buttonWrapper: {
    width: '100%',
    marginBottom: 12,
    alignItems: 'center'
  }
});
