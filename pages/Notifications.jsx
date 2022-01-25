import React from "react";
import NavBar from "../Components/NavBar";
import { StyleSheet, View, Text, ScrollView } from "react-native";
import { PhoneView, BodyContainer, Heading } from "../styles/GeneralStyles";
import NotificationCard from "../Components/NotificationCard";
import notifications from "../stubs/notifications.js";
import events from "../stubs/events.js";
import { SettingsHeader } from "../styles/ProfileStyles";
import { Card, Title, Paragraph } from "react-native-paper";

// stub data structure for pending requests
//date in YYYY, MM, DD
const date1 = new Date(2020, 11, 19).toDateString();
const date2 = new Date(2020, 11, 22).toDateString();

const Notifications = ({ history }) => {
  const [notificationList, setNotifications] = React.useState(notifications);

  const isPending = (n) => {
    if (n === "Pending") {
      return true;
    } else {
      return false;
    }
  };

  React.useEffect(() => {
    setNotifications(notifications);
  }, []);
  let message;

  return (
    <PhoneView>
      <BodyContainer>
        <SettingsHeader>
          <Heading> Notifications</Heading>
        </SettingsHeader>

        <View>
          {notificationList === [] ? (
            <Text> No notifications</Text>
          ) : (
            notificationList.map((n, i) => <NotificationCard n={n} key={i} />)
          )}
        </View>
      </BodyContainer>
      <NavBar history={history} selectedIcon="Notifications" />
    </PhoneView>
  );
};

const styles = StyleSheet.create({
  optCardWide: {
    borderRadius: 8,
    width: "95%",
    //height: 220,
    //padding: 10,
    backgroundColor: "white",
    borderWidth: 0,
    //marginBottom: 10,
    alignSelf: "center",
    borderColor: "#808080",
    marginTop: 40,
    elevation: 10,
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 0,
    paddingBottom: 0,
  },
});

export default Notifications;
