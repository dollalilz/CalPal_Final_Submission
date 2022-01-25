import React from "react";
import { Divider } from 'react-native-paper';
import {View, StyleSheet, TouchableOpacity, Image} from 'react-native';


const styles = StyleSheet.create({
    navBar: {
        position: 'absolute', bottom: 0, backgroundColor:"white"
    },
    icon: {
        height:30, width:30
    }
})


export default function NavBar({history, selectedIcon}){

    const home = selectedIcon === "Home" ? require("../icons/selected_home.png"): require("../icons/home.png");
    const friends = selectedIcon === "Friends" ? require("../icons/selected_friends.png"): require("../icons/friends.png");
    const add = selectedIcon === "Add" ? require("../icons/selected_add.png"): require("../icons/add.png");
    const calendar = selectedIcon === "Calendar" ? require("../icons/selected_calendar.png"): require("../icons/calendar.png");
    const notifications = selectedIcon === "Notifications" ? require("../icons/selected_notifications.png"): require("../icons/notifications.png");

    return (
        <View style={styles.navBar}>
            <Divider style={{backgroundColor: "#77767B"}}/>
            <View style={{display:"flex", flexDirection:"row", width: '100%', marginTop:'3%', marginBottom:'3%',justifyContent:"space-evenly", alignItems:"center"}}>
                <TouchableOpacity onPress={() => {history.push("/Home")}}>
                    <Image alt="home page button" source={home} style={styles.icon}/>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {history.push("/Friends")}}>
                    <Image alt="friends page button" source={friends} style={styles.icon}/>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {history.push("/Meetup")}}>
                    <Image alt="create new meetup"  source={add} style={styles.icon}/>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {history.push("/Calendar")}}>
                    <Image alt="calendar"  source={calendar} style={styles.icon}/>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {history.push("/Notifications")}}>
                    <Image alt="notifications"  source={notifications} style={styles.icon}/>
                </TouchableOpacity>
            </View>
        </View>
    );
}