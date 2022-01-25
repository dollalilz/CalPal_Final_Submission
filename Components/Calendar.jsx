import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
} from "react-native";
import CustomTheme from "./CustomTheme.tsx";
import { DateSelectionCalendar } from "react-native-easy-calendar";
import NavBar from "./NavBar";
import { PhoneView, BodyContainer, Heading } from "../styles/GeneralStyles";
import events from "../stubs/events.js";
import EventCard from "./EventCard";

const styles = StyleSheet.create({
  flexContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
    alignItems: "center",
  },

  topContainer: {
    flex: 0.5,
    flexDirection: "column",
    justifyContent: "flex-start",
    height: "70%",
  },
  bottomContainer: {
    flex: 0.5,
    flexDirection: "column",
    justifyContent: "flex-end",
    alignItems: "flex-end",
    height: "30%",
  },

  colFlex: {
    flexDirection: "column",
    alignItems: "flex-start",
  },

  extraMargin: {
    marginTop: 20,
  },
});

export default function Calendar({ history }) {
  const [selectedDate, setSelectedDate] = React.useState("2020-11-28");

  const [eventList, setEvents] = React.useState(events);
  React.useEffect(() => {
    setEvents(events);
  }, []);

  const getFormattedDate = (eventDate) => {
    const date = eventDate.split(" ");

    const mmm = date[1].trim();

    let month = "01"; //placeholder

    switch (mmm) {
      case "Jan":
        month = "01";
        break;
      case "Feb":
        month = "02";
        break;
      case "Mar":
        month = "03";
        break;
      case "Apr":
        month = "04";
        break;
      case "May":
        month = "05";
        break;
      case "Jun":
        month = "06";
        break;
      case "Jul":
        month = "07";
        break;
      case "Aug":
        month = "08";
        break;
      case "Sep":
        month = "09";
        break;
      case "Oct":
        month = "10";
        break;
      case "Nov":
        month = "11";
        break;
      case "Dec":
        month = "12";
    }

    const formatDate = date[3] + "-" + month + "-" + date[2];

    return formatDate;
  };
  return (
    <PhoneView accessible={true} accessibilityLabel="calendar page">
      <BodyContainer style={styles.colFlex}>
        <Heading>Calendar</Heading>
        <View style={[styles.topContainer, styles.extraMargin]}>
          <DateSelectionCalendar
            theme={CustomTheme}
            onSelectDate={(date) => setSelectedDate(date)}
            selectedDate={selectedDate}
          />
        </View>
        <Heading style={{paddingTop: 20 }}>
          Events
        </Heading>
        <View style={styles.bottomContainer}>
          <ScrollView>
            {eventList === [] ? (
              <Text> No events today yet!</Text>
            ) : (
              eventList.map((e, i) => {
                if (selectedDate === getFormattedDate(e.startDate)) {
                  const date = getFormattedDate(e.startDate);

                  return <EventCard e={e} key={i} />;
                } 
              })
            )}
          </ScrollView>
        </View>
      </BodyContainer>
      <NavBar history={history} selectedIcon="Calendar" />
    </PhoneView>
  );
}
