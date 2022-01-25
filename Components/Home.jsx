import React from "react";
import { StyleSheet, TouchableOpacity, View, Text, Image, ScrollView } from 'react-native';
import { Avatar } from 'react-native-paper';
import NavBar from './NavBar';
import { PhoneView, BodyContainer, StyledCard} from '../styles/GeneralStyles';
import { 
  TileHeading, RecommendationContainer, RecCard, RecCardText, MeetingCard,
  FriendTile
} from '../styles/HomeStyle';


import events from '../stubs/events.js';
import friends from '../stubs/friends.js';

const styles = StyleSheet.create({
    flexContainer: {
        display:"flex", flexDirection:"column", justifyContent:"space-evenly", alignItems:"center"
    },
    individualTile: {
        flex:0, width:'100%', borderRadius:10, padding:10, marginBottom:'5%'
    },
    meetingsRow: {
        flexDirection:"row", justifyContent:"space-evenly", alignItems:"center", marginTop:'5%', marginBottom:'5%'
    },
    avatar:{
        margin:5
    },
    navBar: {
        position: 'absolute', left: 0, right: 0, bottom: 0
    },
    viewAllButton: {
        display:"flex", justifyContent:'center',alignSelf:'center',width:'40%', padding:10, borderRadius:10, backgroundColor:"#3E3E3E"
    },
    buttonText: {
        color:"white", textAlign:"center", fontSize:15, fontWeight:'bold'
    },

})

export default function Home ({history}){

  const [eventList, setEvents] = React.useState(events);
  const [friendsList, setFriends] = React.useState(friends);

    const [more, setMore] = React.useState(false);

    const toggleMore = () => {
        if (more === true){
            setMore(false);
        } else {
            setMore(true);
        }
    }

  return(
    <PhoneView>
        <BodyContainer>
            <ScrollView>
            <View style={{flexDirection:"row", justifyContent:"space-between", alignItems:"center",height:'5%',marginTop:10}}>
                <Image
                    style={{height:30, width:150}}
                    source={require('../icons/calpal_home.png')}
                />
                <TouchableOpacity
                    accessible={true}
                    accessibilityLabel="button to personal profile"
                    onPress={() => {history.push("/PersonalProfile")}}>
                    <Image
                        style={{height:75, width:75}}
                        source={require('../icons/JohnGibson.png')}
                    />  
                </TouchableOpacity>
            </View>
            <View style={styles.flexContainer}>

                <StyledCard>
                    <Text style = {{fontWeight:'bold', fontSize: 18}}> Upcoming Meetings </Text>
                    <View style={styles.meetingsRow}>

                        {
                            eventList === [] ? (
                                <Text style = {{width:'auto', fontSize: 18, textAlign:'auto'}}> None yet!</Text>
                            ): (
                              eventList.map((e, i)=> {
                                const date = (e.startDate).split(" ");
                                const dateStr = `${date[2]} ${date[1]}`;
                                // console.log(dateStr);
                                return (
                                  <MeetingCard key={i}>
                                    <TouchableOpacity>
                                      <Text style={{textAlign:'center', fontSize:25,fontWeight:'bold'}}>{dateStr}</Text>
                                    </TouchableOpacity>
                                  </MeetingCard>

                                );
                                })
                            )
                        }
                    </View>
                    <TouchableOpacity
                        accessible={true}
                        accessibilityLabel="view all upcoming meetings"
                        type="submit"
                        onPress={() => history.push('/Calendar')}
                        style={styles.viewAllButton}
                    >
                        <Text style={styles.buttonText}> View All </Text>
                    </TouchableOpacity>
                </StyledCard>
                <StyledCard>
                    <Text style = {{fontWeight:'bold', fontSize: 18}}> Pals you haven't seen in a while </Text>
                    <View style={{...styles.meetingsRow}}>
                        {
                          friendsList.map((e, i) =>(
                            <FriendTile key={i}>
                              <TouchableOpacity>
                                <Image style={{width:80, height: 80}} source={e.picture}/>
                                <Text style={{textAlign:'center'}}>{e.name}</Text>
                              </TouchableOpacity> 
                            </FriendTile>
                          ))
                        }
                    </View>
                    <TouchableOpacity
                        accessible={true}
                        accessibilityLabel="view all pals you haven't seen in a while"
                        type="submit"
                        onPress={() => history.push('/Friends')}
                        style={styles.viewAllButton}
                    >
                        <Text style={styles.buttonText}> View All </Text>
                    </TouchableOpacity>
                </StyledCard>
                <StyledCard>
                    <TileHeading>
                        Recommendations based on Interests
                    </TileHeading>
                    <RecommendationContainer>
                        <RecCard>
                            <TouchableOpacity 
                                accessible={true}
                                accessibilityLabel="button to bubble tea interest"
                                onPress={() => {history.push("/BubbleTea")}}>
                                <RecCardText>BUBBLE TEA</RecCardText>
                            </TouchableOpacity>
                        </RecCard>
                        <RecCard><RecCardText>BOULDERING</RecCardText></RecCard>
                        <RecCard><RecCardText>CLUBBING</RecCardText></RecCard>
                        <RecCard><RecCardText>RAVING</RecCardText></RecCard>
                    {
                        more ? (
                            <RecommendationContainer>
                                <RecCard><RecCardText>PC CAFE</RecCardText></RecCard>
                                <RecCard><RecCardText>SOCIALISE</RecCardText></RecCard>
                                <TouchableOpacity
                                    accessible={true}
                                    accessibilityLabel="show less recommendations based off interests"
                                    onPress={toggleMore}
                                    style={{ display:"flex", marginLeft:'28%', marginTop:'7%', justifyContent:'center',alignSelf:'center',width:'40%', padding:10, borderRadius:10, backgroundColor:"#3E3E3E"}}
                                >
                                    <Text style={styles.buttonText}>Show Less </Text>
                                </TouchableOpacity>
                            </RecommendationContainer>
                        ):(
                            <TouchableOpacity
                            accessible={true}
                            accessibilityLabel="show more recommendations based off interests"
                            onPress={toggleMore}
                            style={{ display:"flex", marginLeft:'28%', marginTop:'7%', justifyContent:'center',alignSelf:'center',width:'40%', padding:10, borderRadius:10, backgroundColor:"#3E3E3E"}}
                            >
                                <Text style={styles.buttonText}>Show More</Text>
                            </TouchableOpacity>
                        )
                    }
                    </RecommendationContainer>
                </StyledCard>
            </View>
            </ScrollView>
        </BodyContainer>
        <NavBar history={history} selectedIcon="Home"/>
    </PhoneView>
  );
};

//all updated