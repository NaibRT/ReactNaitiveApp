/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {StatusBar,Image,Platform, StyleSheet, Text, View} from 'react-native';
import SignIn from './screens/SignIn';
import SignUp from './screens/SignUp';
import { createStackNavigator,createAppContainer } from 'react-navigation';
const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});


 class App extends Component{
  render() {
    const { navigate } = this.props.navigation;
    
    return (
      <View style={styles.container}>
      <StatusBar
      backgroundColor='#322259'
      color="#000000"
      barStyle="light-content"
      />
      <Image source={require('./img/h1.jpg')} style={styles.bImg2}/>
      <View style={styles.layer}></View>
      <Image source={require('./img/h2.png')} style={styles.bImg}/>
      
     <View style={styles.text}>
    <Text style={styles.text1} >S I G N  I N</Text>
    <Text></Text>
     <Text style={styles.text2}>OR SIGN UP IF YOU'RE</Text>
     <Text style={styles.text2}>NOT A MEMBER</Text>
     
     </View>
             <View style={styles.regitrs}>
             <Text style={styles.SIn}
             onPress={()=>navigate('Signin')}
             >Sign In</Text>
             <Text style={styles.line}>--------------</Text>
             <Text style={styles.SUp}
             onPress={()=>navigate('Signup')}
             > Sign Up</Text>

             </View>
             <Text
             style={styles.google}
             >CONNECT WITH GOOGLE</Text>
      </View>

    );
  }
}
 
const navigation=createStackNavigator({
  Home:{screen:App,
    navigationOptions: {
      header: null,
    }
  },
  Signin:{screen:SignIn,
    navigationOptions: {
      title:'SIGN IN',
      headerTintColor:'#ceab63',
      headerStyle:{
       backgroundColor:'#332258'      
      },
      headerTitleStyle:{
        color:'#ceab63',
        textAlign:"center",
        flex:1
      },
      headerRight: (<View />)
    }
    
  },
  Signup:{
   screen:SignUp,
   navigationOptions: {
    title:'SIGN UP',
    headerTintColor:'#ceab63',
    headerStyle:{
     backgroundColor:'#332258'      
    },
    headerTitleStyle:{
      color:'#ceab63',
      textAlign:"center",
      flex:1
    },
    headerRight: (<View />)

  }
  }
});
 export default createAppContainer(navigation);


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#322259',
  },
  bImg:{
    width: 70, 
    height: 70,
    flex: 1,
    position:'absolute',
    alignItems:'center',
    top:170,
    borderRadius: 150,
    borderColor: '#ceab63',
    borderWidth: 3,
  },
  bImg2:{
    width: '100%', 
    height: '100%',
    flex: 1,
    position:'absolute',
    alignItems:'center',
   resizeMode:'cover',
   backgroundColor:'transparent'
  },
  layer:{
    width: '100%', 
    height: '100%',
    flex: 1,
    position:'absolute',
    alignItems:'center',
   resizeMode:'cover',
   backgroundColor: 'white',
   opacity:0.4
  },
  text:{
    flex:1,
    top:300,
    position:'absolute',
    alignItems:'center'
  },
  text1:{
fontSize: 27,
color:'#322259',
fontWeight: 'bold',
  },
text2:{
  fontWeight: 'bold',
  color:'#ceab63'
},
  SIn:{
   fontSize:30,
   color:'#322259',
 width:110
  },
  SUp:{
    fontSize:30,
    width:100,
    color:'#322259',
    width:110
   },

  regitrs:{
    flex:1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    position:'absolute',
    width:300,
    top:500
  },
  google:{
    color:'#ea416a',
    position:'absolute',
    top:600,
    fontSize:25,
  },
  line:{
    color:'#ceab63'
  }
});
