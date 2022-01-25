import React from "react";
import { Text, View } from 'react-native';
import { FriendsListCard, ProfileImg } from '../styles/FriendsStyle';

const FriendsListNames = ({name, handle, img}) => {

    let retHandle = "";
    if (handle !== ""){
        retHandle='@'+handle;
    }
    const accessibility = `friend card of ${name}`; 
    return (
        <FriendsListCard 
            accessible={true}
            accessibilityLabel={accessibility}
            style={{border:"1px solid black"}}
        >
            <View style={{flexDirection:'row', alignItems:'center'}}>
                <ProfileImg source={img}/>
                <Text>{name}</Text>
            </View>
            <View>
                <Text style={{color:'#5F5AA2'}}>{retHandle}</Text>
            </View>
        </FriendsListCard>
    );
}

export default FriendsListNames;