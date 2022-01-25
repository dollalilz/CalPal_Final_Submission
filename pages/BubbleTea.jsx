import React from "react";
import NavBar from '../Components/NavBar';
import { PhoneView, BodyContainer, Heading, StyledCard } from '../styles/GeneralStyles';
import { Image, TouchableOpacity, Text, View, StyleSheet } from 'react-native';
import { SettingsHeader } from '../styles/ProfileStyles';
import { FriendTile } from '../styles/HomeStyle';
import arrow from '../icons/arrow.png';
import friends from '../stubs/friends.js';

const styles = StyleSheet.create({
    meetingsRow: {
        flexDirection:"row", justifyContent:"space-evenly", alignItems:"center", marginTop:'5%', marginBottom:'5%'
    },
})

const ProfileSettings = ({history}) => {
    return (
        <PhoneView>
        <BodyContainer>
            <SettingsHeader>
                <TouchableOpacity onPress={() => {history.push("/Home")}}>
                    <Image
                        style={{height:30, width:30, marginRight: 20}}
                        source={arrow}
                    />  
                </TouchableOpacity>
                <Heading>Interest: Bubble Tea</Heading>
            </SettingsHeader>
            <StyledCard>
                    <Text style = {{fontWeight:'bold', fontSize: 18}}> Pals that share the same interest </Text>
                    <View style={{...styles.meetingsRow}}>
                        {
                          friends.map((e, i) =>(
                            <FriendTile key={i}>
                              <TouchableOpacity>
                                <Image style={{width:80, height: 80}} source={e.picture}/>
                                <Text style={{textAlign:'center'}}>{e.name}</Text>
                              </TouchableOpacity> 
                            </FriendTile>
                          ))
                        }
                    </View>
                </StyledCard>
        </ BodyContainer> 
        <NavBar 
            history={history}
            selectedIcon=""
        />
        </ PhoneView>
    );
}

export default ProfileSettings;