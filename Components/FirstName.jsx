import React from 'react';
import {TextInput} from 'react-native';

function FirstName() {
  return (
    <TextInput
      label="First Name"
      //autoFocus
      placeholder="First Name"
      placeholderTextColor="black"
      style = {{ width: 310, padding:20, marginBottom:10, backgroundColor:"#ebecff", borderRadius:10 }}
    />
  );
}
export default FirstName;
