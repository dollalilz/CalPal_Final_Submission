import React from "react";
import { Text, Image, View } from 'react-native';
import {
    ProfileTitle, Banner, CardContainer
} from '../styles/ProfileStyles';
const ProfileCard = ({name, picture, banner, comment}) => {
    return (
        <CardContainer>
            <View>
                <Banner
                source={banner} />
                <Image style={{marginTop:-80, marginLeft:'auto', marginRight:'auto'}} source={picture} />
                <ProfileTitle>{name} </ProfileTitle>
                <Text style={{textAlign:'center', padding:15}}> {comment} </Text>
            </View>
        </CardContainer>
    );
}

export default ProfileCard;