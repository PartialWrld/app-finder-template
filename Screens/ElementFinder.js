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
import db from '../localdb';

console.log (db.Hydrogen.symbol)
export default class App extends React.Component {
   constructor() {
    super();
    this.state = {
      text: '',
      displayText: '',
            symbol: [],     
            atomicnumber:[],
            atomicmass:[],
    };
  }
  render() {
    return <View style={styles.container}>
    <Header
    backgroundColor={'green'}
          centerComponent={{
            text: 'element finder',
            style: { color: 'black', fontSize: 25 },

           }}
        />
        <Image
          style={styles.imageIcon}
          source={{
            uri:
              'https://st2.depositphotos.com/3554337/8872/i/950/depositphotos_88726606-stock-photo-green-atom-icon.jpg',
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
                        this.setState({ symbol: db[this.state.text].symbol });
                        this.setState({ atomicnumber: db[this.state.text].atomicnumber });
                        this.setState({ atomicmass: db[this.state.text].atomicmass });

          }}>
          <Text style={styles.buttonText}>Find</Text>
        </TouchableOpacity>
 <TouchableOpacity 
            style={styles.backbutton}
            onPress={()=>this.props.navigation.navigate('HomeScreen')} >
            <Text style={styles.buttonText}>Back</Text>
          </TouchableOpacity>

  <View style={{marginTop:20,}}>
  <Text style={{color:"red", fontSize:20, fontWeight:"bold",marginTop:20,}}>symbol:{this.state.symbol}</Text>
  <Text style={{color:"red", fontSize:20, fontWeight:"bold"}}>atomicnumber:{this.state.atomicnumber}</Text>
  <Text style={{color:"red", fontSize:20, fontWeight:"bold"}}>atomicmass:{this.state.atomicmass}</Text>
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
    marginTop:20,
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