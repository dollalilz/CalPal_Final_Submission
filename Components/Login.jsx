import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import Email from './Email';
import Password from './Password';

const classes = StyleSheet.create({

  loginForm: {
    display:"flex",
    flexDirection:"column",
    alignItems:"center",
    justifyContent:"space-evenly"
  },
  heading: {
    fontWeight:'bold', fontSize:23, color: '#7D83FF', textAlign:'center', marginBottom: 15
  },
  forgotPassword: {
    fontWeight:'bold', marginTop:20,textAlign:'center', fontSize:18
  },
  LoginButton: {
    display:"flex", justifyContent:'center',alignSelf:'center',width:'40%', padding:20, borderRadius:10, backgroundColor:"#7D83FF"
  },
  buttonText: {
    color:"white", textAlign:"center", fontSize:18, fontWeight:'bold'
  },
  redirect:{
    marginTop:5,color:"#7D83FF", textAlign:"center", fontSize:18, fontWeight:'bold'
  },
  question: {
    color:'black',marginTop:24,textAlign:'center', fontSize:18  
  }

});


export default function Login ({ history }){
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  function handleLogin(e){
    e.preventDefault();
    history.push("/Home");
  }

  function handleSignUp(e){
    e.preventDefault();
    history.push("/Signup")
  }

  return(
    <View>
      <Text style = {classes.heading}> Log-in </Text>
      <View className={classes.loginForm}>
        <Email onChangeText={(email) => setEmail(email)}/>
        <Password onChangeText={(password) => setPassword(password)}/>

        <Text style={classes.forgotPassword}> Forgot password? </Text>
        <View style={{marginTop:20}}>
          <TouchableOpacity
            type="submit"
            onPress={(e) => handleLogin(e)}
            style={classes.LoginButton}
          >
            <Text style={classes.buttonText}> Log-in </Text>
          </TouchableOpacity>
        </View>
      </View>
      <Text style={classes.question}> Don't have an account? </Text>
      <TouchableOpacity
            type="submit"
            onPress={(e) => handleSignUp(e)}
          >
            <Text style={classes.redirect}> Create a new account</Text>
      </TouchableOpacity>
    </View>
  );
};