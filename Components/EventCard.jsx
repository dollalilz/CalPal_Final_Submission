import React from "react";
import { Text, TouchableOpacity, StyleSheet, Button, View } from "react-native";
import { Card, Title, Paragraph } from "react-native-paper";

const EventCard = ({ e }) => {
  return (
    <Card style={styles.optCardWide}>
      <Card.Content>
        <Text style={styles.eventTitle}> {e.name} </Text>
        <Text> Hosted by {e.host} </Text>
        <Text>
          {" "}
          {e.startDate} at {e.startTime} until {e.endDate} at {e.endTime}
        </Text>
        <Button title={e.status.toUpperCase()} />
      </Card.Content>
    </Card>
  );
};

const styles = StyleSheet.create({
  eventTitle: {
    textAlign: "left",
    fontWeight: "bold",
  },

  eventMeta: {
    textAlign: "center",
  },
  optCardWide: {
    borderRadius: 8,
    width: 330, // this keeps getting resized if i dont harcode it...
    //height: 220,
    //padding: 10,
    backgroundColor: "white",
    borderWidth: 0,
    //marginBottom: 10,
    alignSelf: "center",
    borderColor: "#808080",
    marginTop: 10,
    elevation: 10,
    //paddingLeft: 20,
    //paddingRight: 20,
    paddingTop: 0,
    paddingBottom: 0,
  },
});

export default EventCard;
