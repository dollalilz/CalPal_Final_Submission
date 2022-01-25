import React from "react";
import { StyleSheet, Image, View, Text, TouchableOpacity } from 'react-native';
import Email from './Email';
import Password from './Password';
import Username from './Username';
import FirstName from "./FirstName";
import LastName from "./lastName";

const classes = StyleSheet.create({

  signUpForm: {
    display:"flex",
    flexDirection:"column",
    alignItems:"center",
    justifyContent:"space-evenly"
  },

  SignUpButton: { 
    display:"flex", justifyContent:'center',alignSelf:'center',width:'95%', padding:20, borderRadius:10, backgroundColor:"#7D83FF"
  },
  redirect: {
    color: '#7d83ff', padding:0, paddingLeft:5, marginBottom:2.5, fontWeight:'bold', fontSize:18
  },
  heading: {
    fontWeight:'bold', fontSize:23, color: '#7D83FF', textAlign:'center', marginBottom: 15
  },
  buttonText: {
    color:"white", textAlign:"center", fontSize:18, fontWeight:'bold'
  },
  question: {
    color:'black',marginTop:24,textAlign:'center', fontSize:18  
  }
});

export default function Signup ({ history }){
  return(
    <View style={classes.signUpForm}>
      <Text style = {classes.heading}> Create a new account </Text>
      <View>
        <Username />
        <FirstName />
        <LastName />
        <Email />
        <Password />
        <View>
          <TouchableOpacity
              type="submit"
              onPress={(e) => history.push('\Login')}
              style={classes.SignUpButton}
            >
              <Text style={classes.buttonText}> Create a new account </Text>
            </TouchableOpacity>
        </View>
      </View>
      <Text style = {classes.question}> Already have an account? </Text>
      <TouchableOpacity
        onPress={() => history.push('\Login')}
      >
        <Text style={classes.redirect}> Log-in</Text>
      </TouchableOpacity>
    </View>
  );
};
