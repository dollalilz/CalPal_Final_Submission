import React from "react";
import { Text, TouchableOpacity, StyleSheet, View } from "react-native";
import {
  NotifInfo,
  NotifControlDiv,
  NotifControlText,
  NotifCardContainer,
} from "../styles/NotifStyles";

const isPending = (status) => {
  if (status === "Pending") {
    return true;
  } else {
    return false;
  }
};

let message;

const NotificationCard = ({ n }) => {
  const [status, setStatus] = React.useState(n.status);
  if (isPending(status)) {
    message =
      n.sender + " has invited you to " + n.name + " on\n" + n.date + ".";
  } else {
    message =
      "You have " +
      status.toLowerCase() +
      " " +
      n.sender +
      "'s invitation to " +
      n.name +
      " on " +
      n.date +
      ".";
  }

  return (
    <NotifCardContainer>
      <NotifInfo style={{ borderBottomWidth: 1 }}>
        <Text style={styles.notifText}>{message}</Text>
      </NotifInfo>

      {isPending(status) ? ( // pending - show accept/decline options
        <View>
          <NotifControlDiv>
            <TouchableOpacity
              onPress={() => setStatus('Accepted')}
              style={{ width: "50%", borderRightWidth: 1, padding: 10 }}
            >
              <NotifControlText>Accept</NotifControlText>
            </TouchableOpacity>
            <TouchableOpacity 
              onPress={() => setStatus('Declined')}
              style={{ width: "50%", padding: 10 }}>
              <NotifControlText>Decline</NotifControlText>
            </TouchableOpacity>
          </NotifControlDiv>
        </View>
      ) : (
        <View>
          <TouchableOpacity style={{ width: "100%", padding: 10 }}>
            <NotifControlText>{status}</NotifControlText>
          </TouchableOpacity>
        </View>
      )}
    </NotifCardContainer>
  );
};

const styles = StyleSheet.create({
  notifText: {
    padding: 10,
    textAlign: "center",
  },
});

export default NotificationCard;
