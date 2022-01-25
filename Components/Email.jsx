import React from 'react';
import {TextInput} from 'react-native';


function Email(props) {
  return (
    <TextInput
      label="Email"
      placeholder="Email"
      placeholderTextColor="black"
      onChangeText={text => props.onChangeText(text)}
      style = {{ width: 310, padding:20, marginBottom:10, backgroundColor:"#ebecff", borderRadius:10 }}
    />
  );
}
export default Email;
