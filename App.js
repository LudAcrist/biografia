import {View, Text, StyleSheet, SafeAreaView, ScrollView, Image} from 'react-native';
import TextComponent from './components/TextComponent';

const App = () =>{
  return(
   <SafeAreaView style={styles.container}>
    <ScrollView>
     <Text style={styles.title}>Mi biografía</Text>
     <View style={styles.container}>
       <Image style={styles.image} source={require('./assets/images/mi.png')}/>
     </View>
     <View style={styles.Textcontainer}>
       <TextComponent></TextComponent>
     </View>
    </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",    
    width: "100%",
    height: "100%",
    backgroundColor: '#AFE4EF',
    padding: 15
  },
  image: {
    marginTop: 4,
    width: 270, 
    height: 300
  },
  title: {
    textAlign: "center",
    fontSize: 36,
    fontWeight: "normal",
    color:  "#104955",
    padding: 20
  }, 
  Textcontainer: {
    alignItems: "center",
    justifyContent: "center",    
    width: "50",
    height: "50",
    backgroundColor: '#D4F0F6',
    borderRadius: 25,
    padding: 10
    
  }
})

export default App

