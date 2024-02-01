import {View, text} from 'react-native';

const TextComponent = () =>{
    return(
    <View>
       <Text style={styles.text}>Nombre: Ludwicka Aguirre </Text>
       <Text style={styles.text}>Ocupación: Bartender </Text>
       <Text style={styles.text}>Edad: 23 </Text>
       <Text style={styles.text}>Fecha de nacimiento: 01/07/2000</Text>
       <Text style={styles.text}>Grado de Estudios: Licencitura</Text>
       <Text style={styles.text}>Sobre mí: </Text>     
    </View>
    )
}

const styles = StyleSheet.create({
  text: {
      fontSize: 14,
      fontWeight: "normal",
      fontFamily: "Helvetica",
      color: '#fff'
  }
})
  
  export default TextComponent
  