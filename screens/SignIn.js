import React, { Component } from 'react';
import { TouchableOpacity,TextInput,Text, View,StyleSheet,Image,Button } from 'react-native';

export default class SignIn extends Component {
  render() {
    return (
      <View style={styles.container}>
      <Image source={require('../img/h2.png')} style={styles.bImg}/>
        <TextInput style={styles.input}
        placeholder='U S E R N A M E  O R  E M A I L'
        placeholderTextColor='white'
        

        />
        <TextInput style={styles.input}
        placeholder='P A S S W O R D'
        placeholderTextColor='white'
        secureTextEntry={true}
        />
        <View style={styles.subbtn}>
        <Text style={styles.subBtnTxt}>NEW ACCOUNT</Text>
        <Text></Text>
        <Text style={styles.subBtnTxt}>RESTORE PASSWORD</Text>
        </View>
        <TouchableOpacity style={styles.login}>
        <Text style={styles.button}
        >S I G N  I N</Text>
        </TouchableOpacity>
      </View>
    )
  }
}




const styles=StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#322259',
    justifyContent: 'center',
    alignItems: 'center',
  },
  input:{
    width:'70%',
    height:70,
    borderBottomColor: '#ceab63',
    borderBottomWidth: 1,
    textAlign: 'center'
    //placeholder:'USERNAME OR EMAIL'
  },

  bImg:{
    width: 70, 
    height: 70,
    flex: 1,
    position:'absolute',
    alignItems:'center',
    top:100,
    borderRadius: 150,
    borderColor: '#ceab63',
    borderWidth: 3,
  },
  subbtn:{
    flex:1,
    flexDirection: 'row',
   justifyContent: 'space-between',
   position:'absolute',
   width:300,
   top:400,
   
  },
subBtnTxt:{
  color:'#ffffff'
},
login:{
   
   flex:1,
   position:'absolute',
   top:450,
   width:'70%',
   height:70,
  borderRadius: 100,
  backgroundColor: '#ceab63',
  justifyContent: 'center',
  alignItems: 'center',
 },
 button: {
  backgroundColor: '#ceab63',
  color: 'white',
  fontSize: 24,
  fontWeight: 'bold',
  overflow: 'hidden',
  padding: 15,
  textAlign:'center',
  width:'100%',
  height:70,
  borderRadius: 100,
}
});



