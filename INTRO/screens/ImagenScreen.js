import React, { useState, useEffect } from 'react' 
import { Text, StyleSheet, View, ImageBackground, Dimensions } from 'react-native'

const BackgroundImage = require('../assets/Fondo.jpg');
const BackgroundImagen = require('../assets/icon.png');

export default function ImagenBackgroundSplashScreen({navigation}) {
    const [showsplash, setShowSplash] = useState(true);

    useEffect(() => {

       const timer = setTimeout(() => {
            setShowSplash(false);
        }, 3000);
        return () => clearTimeout(timer);
    }, []);

    if (showsplash) {
        return (
            <View style={styles.container}>
                <ImageBackground source={BackgroundImage} 
                style={styles.background}
                resizeMode="cover">    

                <View style={styles.overlay}>
                    <Text style={styles.title}>Bienvenido...</Text>
                    <Text style={styles.title}>Cargando...</Text>
                </View>
                </ImageBackground>
            </View>
        );
    }
    return (
            <View style={styles.container}>
                <ImageBackground source={BackgroundImagen} 
                style={styles.background}
                resizeMode="cover"> 
            </ImageBackground>
                
        <View style={styles.mainScreen}>
            <Text style={styles.mainText}>Bienvenido a la pantalla principal</Text>
        </View>
        </View>
    );
}

    const { width, height } = Dimensions.get('window');
    const styles = StyleSheet.create({
        background: {
            width: width,
            height: height,
        },
        overlay: {
            flex: 1,
            //backgroundColor: 'black',
            justifyContent: 'center',
            alignItems: 'center',
            padding: 20,
        },
        title: {
            fontSize: 32,
            color: '#fff',
            fontWeight: 'bold',
            marginBottom: 10,
            textAlign: 'center',
        },
        mainScreen: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
           // backgroundColor: '#f2f2f2',
        },
        mainText: {
            fontSize: 24,
            color: '#333',
            justifyContent: 'center',
            alignItems: 'center',
        },
    });
