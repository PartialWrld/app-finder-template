import * as React from 'react';
import { View, Text, TouchableOpacity,StyleSheet,Image } from 'react-native';
import { Header } from 'react-native-elements';

export default class HomeScreen extends React.Component {
 goToElementFinder=()=> {
      this.props.navigation.navigate('ElementFinder',)
    };
    


  render(){
    return(
      <View>
     
        <Header
    backgroundColor={'green'}
          centerComponent={{
            text: 'Chemistry Research',
            style: { color: 'black', fontSize: 20 },

           }}
        />
      <Image
          style={styles.imageIcon}
          source={{
            uri:
              'https://www.siena.edu/files/pages/square-xsml-chemistry-2.png',
          }}
        />

          <TouchableOpacity 
            style={[styles.button,{backgroundColor:"green"}]} 
            onPress={()=>this.props.navigation.navigate('ElementFinder')}>
            <Text style={styles.buttonText}>Element Finder</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={[styles.button,{backgroundColor:"blue"}]}
            onPress={()=>this.props.navigation.navigate('FormulaFinder')} >
            <Text style={styles.buttonText}>Formula Finder</Text>
          </TouchableOpacity>
        
        

      </View>
    )
  }
}


const styles = StyleSheet.create({
  button:{
    justifyContent : 'center',
    alignSelf : 'center',
    borderWidth : 2,
    borderRadius : 15,
    marginTop:100,
    width : 200,
    height:50,
  },
  buttonText : {
    textAlign : 'center',
    color : 'white'
    
  },
   imageIcon: {
    width: 150,
    height: 150,
    marginLeft: 95,
  },
  backbutton:{
    alignSelf : 'center',
    textAlign: 'center',
marginTop:20,
    width : 200,
    height:50,
  },
})