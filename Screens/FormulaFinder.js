import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
  
  
} from 'react-native';
import { Header } from 'react-native-elements';
import db from '../localdb2'


console.log (db.Acetate.Weight)
export default class App extends React.Component {
   constructor() {
    super();
    this.state = {
      text: '',
      displayText: '',
            formula: [],     
            Weight:[],
      
    };
  }
  render() {
    return <View style={styles.container}>
    <Header
    backgroundColor={'green'}
          centerComponent={{
            text: 'formula Finder',
            style: { color: 'black', fontSize: 25 },

           }}
        />
        <Image
          style={styles.imageIcon}
          source={{
            uri:
              'https://png.pngtree.com/element_our/20190531/ourlarge/pngtree-chemical-molecule-decoration-illustration-image_1295026.jpg',
          }}
        />
         <TextInput
          style={styles.inputBox}
          onChangeText={text => {
            this.setState({ text: text });
          }}
        />
        
             <TouchableOpacity
          style={styles.goButton}
          onPress={() => {
                        this.setState({ Weight: db[this.state.text].Weight });
                        this.setState({ formula: db[this.state.text].formula });
                     

          }}>
          <Text style={styles.buttonText}>Find</Text>
        </TouchableOpacity>
 <TouchableOpacity 
            style={styles.backbutton}
            onPress={()=>this.props.navigation.navigate('HomeScreen')} >
            <Text style={styles.buttonText}>Back</Text>
          </TouchableOpacity>
          <View style={{marginTop:20,}}>
  <Text style={{color:"red", fontSize:20, fontWeight:"bold",marginTop:30}}>formula:{this.state.formula}</Text>
  <Text style={{color:"red", fontSize:20, fontWeight:"bold"}}>Weight:{this.state.Weight}</Text>
</View>

    </View>;
    
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    },
    imageIcon: {
    width: 150,
    height: 150,
    marginLeft: 95,
  },
   inputBox: {
    marginTop: 100,
    width: '80%',
    alignSelf: 'center',
    height: 40,
    textAlign: 'center',
    borderWidth: 4,
    outline: 'none',

  },
goButton: {
    width: '50%',
    height: 55,
    alignSelf: 'center',
    padding: 10,
    margin: 10,
  },
  buttonText: {
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
     justifyContent : 'center',
    alignSelf : 'center',
    borderWidth : 2,
    borderRadius : 15,
    marginTop:50,
    width : 200,
    height:50,
    backgroundColor:'green'
  }, 
   backbutton:{
    alignSelf : 'center',
    textAlign: 'center',
marginTop:20,
    width : 200,
    height:50,
  },

  });