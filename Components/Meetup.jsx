import React from 'react';
import {View, Text, StyleSheet, Alert} from 'react-native';
import { ScrollView,TouchableOpacity} from 'react-native';
import { TextInput } from 'react-native-paper';
import NavBar from './NavBar';
import { PhoneView, BodyContainer, Heading } from '../styles/GeneralStyles';
import SectionedMultiSelect from 'react-native-sectioned-multi-select';
import Icon from 'react-native-vector-icons/MaterialIcons'
import friends from '../stubs/friends.js';
import events from '../stubs/events.js';
import DateTimePicker from '@react-native-community/datetimepicker';

const parseFriends = () => {
  // list of dictionaries
  let list = []; 
  for (let i = 0; i < friends.length; i++){
    const item = {
      id: friends[i].name,
      name: friends[i].name,
    }
    list.push(item);
  }
  return list;
}
const friendsList = parseFriends();

const classes = StyleSheet.create({

  heading: {
    fontWeight:'bold', fontSize:23, color: '#7D83FF', textAlign:'center'
  },
  contentContainer: {
    display:"flex", flexDirection:"column", justifyContent:"flex-start", alignItems:"center",width:'100%'
  },
  
  sendInviteButton: {
    display:"flex", justifyContent:'center',alignSelf:'center',width:'60%',margin:15, padding:20, borderRadius:10, backgroundColor:"#7D83FF"
  },
  buttonText: {
    color:"white", textAlign:"center", fontSize:18, fontWeight:'bold'
  },
  input: {
    width: 310,marginBottom:10, backgroundColor:"#ebecff", borderRadius:10
  },
  timeInput:{
    width: '35%',marginBottom:10, backgroundColor:"#ebecff", borderRadius:10
  }, 
  formContainer:{
    width:'100%', height:'90%', marginTop:10, backgroundColor:'white', borderRadius:8, padding: 5
  }
});

export default function Meetup({history}) {

    const [eventName, setEventName] = React.useState();
    const [startDate, setStartDate] = React.useState(new Date());
    const [endDate, setEndDate] = React.useState(new Date());
    const [startTime, setStartTime] = React.useState(new Date(1607086800000));
    const [endTime, setEndTime] = React.useState(new Date(1607086800000));
    const [location, setLocation] = React.useState('');
    const [friends, setSelectedFriends] = React.useState([]);

    const [isStart, setIsStart] = React.useState(false);
    const [isStartTime, setIsStartTime] = React.useState(false);

    const [mode, setMode] = React.useState('date');
    const [show, setShow] = React.useState(false);

    const onChangeStart = (event, selectedDate) =>{
      const currentDate = selectedDate || startDate;
      setShow(Platform.OS === 'ios');
      setStartDate(currentDate);
      setIsStart(false);
      if (event.type == 'set'){
        setShow(false);
      }
    }

    const onChangeEnd = (event, selectedDate) =>{
      const currentDate = selectedDate || endDate;
      setShow(Platform.OS === 'ios');
      setEndDate(currentDate);
      setIsStart(false);
      if (event.type == 'set'){
        setShow(false);
      }
      
    }

    const onChangeStartTime = (event, selectedDate) =>{
      const currentDate = selectedDate ||  startTime;
      setShow(Platform.OS === 'ios');
      setStartTime(currentDate);
      setIsStartTime(false);
      if (event.type == 'set'){
        setShow(false);
      }
    }

    const onChangeEndTime = (event, selectedDate) =>{
      const currentDate = selectedDate || endTime;
      setShow(Platform.OS === 'ios');
      setEndTime(currentDate);
      setIsStartTime(false);
      if (event.type == 'set'){
        setShow(false);
      }
    }

    const showMode = (currentMode) => {
      setShow(true);
      setMode(currentMode);
    };
  
    const showDatepicker = () => {
      showMode('date');
    };
  
    const showTimepicker = () => {
      showMode('time');
    };

    function handleNewMeetup(){
      const eventObject = {
          host:"John",
          eventName,
          attending: friends,
          startDate,
          startTime,
          endDate,
          endTime,
          location,
          status: "Accepted" 
      }
      console.log(eventObject);
        Alert.alert(
          "Confirmation",
          `Are you sure you want to invite Lily and Marina to "Work drinks"?`,
          [
              {
              text: "Cancel",
              onPress: () => console.log("Cancel Pressed"),
              style: "cancel"
              },
              { text: "OK", onPress: () => {
                let arr = [...events];
                arr.push(eventObject);
                // setEvents(arr);
                history.push('/Home');
                
              }}
          ],
          { cancelable: false }
          );
    }
    
    return (
        <PhoneView>
            <BodyContainer>
                <Heading>New Meetup</Heading>
                <View style={classes.formContainer}>
                        <ScrollView contentContainerStyle={classes.contentContainer}>
                            <Text style={{fontSize:18}}>Event Name</Text>
                            <TextInput
                                label="Event name"
                                placeholderTextColor="black"
                                style = {classes.input}
                                onChangeText={(eventName) => setEventName(eventName)}
                            />
                            <Text style={{fontSize:18}}>Pals</Text>
                            <View style={classes.input}>
                                <SectionedMultiSelect
                                    styles={{chipContainer:{width:130, height:40}, chipText:{fontSize:16}}}
                                    colors={{primary:'#7D83FF', chipColor:'black'}}
                                    IconRenderer={Icon}
                                    fontSize={18}
                                    items={friendsList}
                                    uniqueKey="id"
                                    selectText={friends.length === 0 ? ("Choose pals to invite"): friends.join(", ")}
                                    selectedItems={friends}
                                    searchPlaceholderText="Search for Pals"
                                    searchInputStyle={{padding:20}}
                                    onSelectedItemsChange={(selectedFriends) => setSelectedFriends(selectedFriends)}
                                /> 
                            </View>
                            <Text style={{fontSize:18}}>Start Date</Text>
                            <TextInput
                                label="Start"
                                placeholder="Pick your start date"
                                placeholderTextColor="black"
                                style = {classes.input}
                                value={startDate.toDateString()}
                                onFocus={() => {
                                  showDatepicker();
                                  setIsStart(true);
                                }}
                            />
                            <Text style={{fontSize:18}}>End Date</Text>
                            <TextInput
                                label="End"
                                placeholder="Pick your end date"
                                placeholderTextColor="black"
                                value={endDate.toDateString()}
                                style = {classes.input}
                                onFocus={() => {
                                  showDatepicker();
                                  setIsStart(false);
                                }}
                            />
                            <Text style={{fontSize:18}}>Time</Text>
                            <View style={{flexDirection: 'row', alignItems:'center'}}>
                            <TextInput
                                label="Start time"
                                placeholder="00:00"
                                placeholderTextColor="black"
                                value={startTime.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}
                                style = {classes.timeInput}
                                onFocus={() => {
                                  showTimepicker();
                                  setIsStartTime(true);
                                }}
                            />
                            <Text style={{margin: 15}}> to </Text>
                            <TextInput
                                label="End Time"
                                placeholder="00:00"
                                placeholderTextColor="black"
                                value={endTime.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}
                                style = {classes.timeInput}
                                onFocus={() => {
                                  showTimepicker();
                                  setIsStartTime(false);
                                }}
                            />
                            </View>
                            <Text style={{fontSize:18}}>Location</Text>
                            <TextInput
                                label="Location"
                                placeholderTextColor="black"
                                style = {classes.input}
                                onChangeText={(location) => setLocation(location)}
                            />
                            <TouchableOpacity
                                type="submit"
                                onPress={() => handleNewMeetup()}
                                style={classes.sendInviteButton}
                            >
                                <Text style={classes.buttonText}> Send Invitation </Text>
                            </TouchableOpacity>         
                        </ScrollView>
                </View>
                {isStart ? (
                  show && (
                    <DateTimePicker
                      testID="dateTimePicker"
                      value={startDate}
                      mode={mode}
                      is24Hour={true}
                      display="default"
                      onChange={onChangeStart}
                    />
                  )) : (
                  show && (
                    <DateTimePicker
                      testID="dateTimePicker"
                      value={endDate}
                      mode={mode}
                      is24Hour={true}
                      display="default"
                      onChange={onChangeEnd}
                    />
                  ))
                }
                {isStartTime ? (
                  show && (
                    <DateTimePicker
                      testID="dateTimePicker"
                      value={startTime}
                      mode={mode}
                      is24Hour={true}
                      display="default"
                      onChange={onChangeStartTime}
                    />
                  )) : (
                  show && (
                    <DateTimePicker
                      testID="dateTimePicker"
                      value={endTime}
                      mode={mode}
                      is24Hour={true}
                      display="default"
                      onChange={onChangeEndTime}
                    />
                  ))
                }
            </BodyContainer>
            <NavBar history={history} selectedIcon="Add"/>
        </PhoneView>
    );
}
