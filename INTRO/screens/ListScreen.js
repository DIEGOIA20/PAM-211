import { Text, StyleSheet, View, FlatList, SectionList } from 'react-native'


export default function ListScreen() {
    const ejercicios = [


        {id:'1', nombre: 'Sentadillas', descripcion: 'Ejercicio para piernas y gluteos'},
        {id:'2', nombre: 'Sentadillas', descripcion: 'Ejercicio para piernas y gluteos'},
        {id:'3', nombre: 'Sentadillas', descripcion: 'Ejercicio para piernas y gluteos'},
        {id:'4', nombre: 'Sentadillas', descripcion: 'Ejercicio para piernas y gluteos'},
        {id:'5', nombre: 'Sentadillas', descripcion: 'Ejercicio para piernas y gluteos'},
        {id:'6', nombre: 'Sentadillas', descripcion: 'Ejercicio para piernas y gluteos'},
        {id:'7', nombre: 'Sentadillas', descripcion: 'Ejercicio para piernas y gluteos'},
        {id:'8', nombre: 'Sentadillas', descripcion: 'Ejercicio para piernas y gluteos'},
        {id:'9', nombre: 'Sentadillas', descripcion: 'Ejercicio para piernas y gluteos'},
        {id:'10', nombre: 'Sentadillas', descripcion: 'Ejercicio para piernas y gluteos'},
    ];

    // SectionList 
    const contactos = [
        {titulo: 'A', data: ['Alejandra', 'Ana la de las tortillas', 'Alicia']},
        {titulo: 'M', data: ['Mecanico', 'Mi Ex', 'Mama de mi ex']},
        {titulo: 'T', data: ['TheWillyrex', 'Tulio', 'Trevor']},
    ]

    return (
    <View style={styles.container}>
      <View style={styles.listContainer}>
        <Text style={styles.titulo}>Lista de Ejercicios</Text>
        <FlatList
          data={ejercicios}
          renderItem={({ item }) => (
            <View style={styles.item}>
              <Text style={styles.nombre}>{item.nombre}</Text>
              <Text style={styles.descripcion}>{item.descripcion}</Text>
            </View>
          )}
          keyExtractor={item => item.id}
        />
      </View>

       <View style={styles.listContainer}>
        <Text style={styles.titulo}>Lista de Contactos</Text>
        <SectionList
          sections={contactos}
          renderItem={({ item }) => (
              <Text style={styles.item}>{item}</Text>
          )}

          renderSectionHeader={({ section }) => (
            <Text style={styles.header}>{section.titulo}</Text>
          )}
        />
      </View>

    </View>

   
  );
}
const styles = StyleSheet.create({
  container:{
    flex:1,
    padding: 10,
  },
  listContainer:{
    flex:1,
    marginBottom: 32,
  },
  titulo:{
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    margin: 10,
  },
  item:{
    padding: 10,
    backgroundColor: '#7c80f1ff',
    marginHorizontal: 10,
    marginVertical: 10,
    borderRadius: 5,
  },
  header:{
    fontSize: 18,
    backgroundColor: '#ffffffff',
    padding: 10,
    marginTop: 10,
  },
  nombre:{
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  descripcion:{
    fontSize: 14,
    color: '#ffffffff',
  },
});