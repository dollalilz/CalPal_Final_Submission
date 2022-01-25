import React from "react";
import NavBar from '../Components/NavBar';
import { PhoneView, BodyContainer, Heading } from '../styles/GeneralStyles';
import { ProfileHeader } from '../styles/ProfileStyles';
import { Image, TouchableOpacity, ScrollView } from 'react-native';
import gear from '../icons/gear.png';
import EditableInterest from '../Components/EditableInterest';
import ProfileCard from '../Components/ProfileCard';
import JohnGibson from '../icons/JohnGibson.png';
import banner from '../icons/banner.png';

const PersonalProfile = ({history}) => {
    const user = {
        name: "John Gibson",
        picture: JohnGibson,
        banner: banner,
        comment: "He/Him. Taurus. I love cats and dogs. Feel free to hit me up anytime I'm unemployed"
    };
    
    const interestList = [
        "Bouldering", "Snowboarding", "Drinks", "Italian Food", "Gym", "Flooring"
    ]

    const [interests, setInterests] = React.useState(interestList);

    const handleInterests = (newList) => {
        setInterests(newList);
    }

    return (
        <PhoneView>
        <BodyContainer>
            <ScrollView>
                <ProfileHeader>
                    <Heading>Your Profile</Heading>
                    <TouchableOpacity onPress={() => {history.push("/ProfileSettings")}}>
                        <Image
                            style={{height:35, width:35}}
                            source={gear}
                        /> 
                    </TouchableOpacity>
                </ProfileHeader>
                <ProfileCard 
                    name={user.name}
                    picture={user.picture}
                    banner={user.banner}
                    comment={user.comment}
                />
                <EditableInterest 
                    interests={interests}
                    setInterests={handleInterests}
                />
            </ScrollView>
        </ BodyContainer> 
        <NavBar 
            history={history}
            selectedIcon=""
        />
        </ PhoneView>
    );
};

export default PersonalProfile;