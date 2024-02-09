import {View, Text, StyleSheet, SafeAreaView, ScrollView, Image} from 'react-native';

const TextComponent = () =>{
    return(
    <View>
       <Text style={styles.text}>Nombre: Ludwicka Aguirre. </Text>
       <Text style={styles.text}>Ocupación: Bartender. </Text>
       <Text style={styles.text}>Edad: 23 años. </Text>
       <Text style={styles.text}>Fecha de nacimiento: 01/07/2000</Text>
       <Text style={styles.text}>Grado de Estudios: Licenciatura en curso</Text>
       <Text style={styles.text}>Sobre mí: Actualmente me encuentro estudiando ingenieria en software en la UAQ y a su vez trabajo como bartender en un restaurante. Me gusta mucho la coctelería y repostería. En mis tiempos libres me gusta ver series y peliculas. Estoy aprendiendo un tercer idioma que es el Alemán. Tengo una gatita llamada Azumi y un bulldog llamado Jotaro. </Text>     
    </View>
    )
}

const styles = StyleSheet.create({
  text: {
      fontSize: 16,
      fontWeight: "normal",
      textAlign: "center",
      color: '#0D363F',
      borderBottomWidth: 5, 
      borderColor: '#D4F0F6'
  }
})
  
  export default TextComponent
  