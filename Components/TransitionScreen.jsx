import React from 'react';
import {StyleSheet, View, Image } from 'react-native';
import { useHistory } from "react-router-native";


export default function TransitionScreen() {

    const history = useHistory();
    setTimeout(() => {
      //history.push("/Home");
      history.push('/Login');
    }, 1100)

    return(
        <View style={styles.container}>
            <Image
            style={styles.calpalLogo}
            source={require('../icons/calpal.png')}
            />  
        </View>
    )
  }


  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#FAFAFA',
      alignItems: 'center',
      justifyContent: 'center',
    },
    calpalLogo: {
      minWidth:400,
      minHeight:400,
      maxWidth:500,
      maxHeight:500,
    }
  });
  