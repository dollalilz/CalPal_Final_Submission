import React, { useState } from "react";
import NavBar from "../Components/NavBar";
import { PhoneView, BodyContainer, Heading } from "../styles/GeneralStyles";
import {
  View,
  StyleSheet,
  Text,
  Image,
  Switch,
  TouchableOpacity,
} from "react-native";
import { Card, Title, Paragraph } from "react-native-paper";
import { SettingsHeader } from "../styles/ProfileStyles";
import arrow from "../icons/arrow.png";
import { blue } from "react-native-ios-kit/src/styles/colors";
import Icon from "react-native-vector-icons/FontAwesome";

const ProfileSettings = ({ history }) => {
  const [isEnabled, setIsEnabled] = useState(false);
  const [isEnabled2, setIsEnabled2] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
  return (
    <PhoneView>
      <BodyContainer>
        <SettingsHeader>
          <TouchableOpacity
            onPress={() => {
              history.push("/PersonalProfile");
            }}
          >
            <Image style={{ height: 30, width: 30, marginRight: 20 }} source={arrow} />
          </TouchableOpacity>
          <Heading> Account Settings </Heading>
        </SettingsHeader>

        <Card style={styles.optCardWide}>
          <View style={styles.rowFlex}>
            <View style={styles.leftContainer}>
              <Text>Email</Text>
            </View>
            <View style={styles.rightContainer}>
              <Text style={styles.optValue}>john@gmail.com </Text>
              <Icon name="chevron-right" size={15} style={styles.moreIcon} />
            </View>
          </View>

          <View style={styles.rowFlex}>
            <View style={styles.leftContainer}>
              <Text>Change password</Text>
            </View>
            <View style={styles.rightContainer}>
              <Icon name="chevron-right" size={15} style={styles.moreIcon} />
            </View>
          </View>

          <View style={styles.rowFlex}>
            <View style={styles.leftContainer}>
              <Text>Notifications</Text>
            </View>
            <View style={styles.rightContainer}>
              <Switch
                trackColor={{ false: "#767577", true: "#4CD964" }}
                thumbColor={isEnabled ? "#FFFFFF" : "#f4f3f4"}
                ios_backgroundColor="#3e3e3e"
                onValueChange={toggleSwitch}
                value={isEnabled}
              />
            </View>
          </View>

          <View style={styles.rowFlex}>
            <View style={styles.leftContainer}>
              <Text>Private account</Text>
            </View>
            <View style={styles.rightContainer}>
              <Switch
                trackColor={{ false: "#767577", true: "#4CD964" }}
                thumbColor={isEnabled2 ? "#FFFFFF" : "#f4f3f4"}
                ios_backgroundColor="#3e3e3e"
                onValueChange={toggleSwitch}
                value={isEnabled2}
              />
            </View>
          </View>

          <View style={styles.lastRowFlex}>
            <View style={styles.leftContainer}>
              <Text>Linked accounts</Text>
            </View>
            <View style={styles.rightContainer}>
              <Text style={styles.optValue}></Text>
              <Icon
                name="facebook"
                size={15}
                style={{ ...styles.icon, ...styles.moreIcon }}
              />
              <Icon
                name="twitter"
                size={15}
                style={{ ...styles.icon, ...styles.moreIcon }}
              />
              <Icon
                name="instagram"
                size={15}
                style={{ ...styles.icon, ...styles.moreIcon }}
              />
              <Icon name="chevron-right" size={15} style={styles.moreIcon} />
            </View>
          </View>
        </Card>

        <Card style={styles.optCardWide}>
          <Card.Content>
            <Text> App Feedback</Text>
          </Card.Content>
        </Card>

        <Card
          style={styles.optCardWide}
          onPress={() => {
            history.push("/Login");
          }}
        >
          <Card.Content>
            <Text> Logout </Text>
          </Card.Content>
        </Card>

        <Card style={styles.optCardWideWarning}>
          <Card.Content>
            <Text
              style={{
                alignSelf: "center",
                fontWeight: "bold",
                color: "white",
              }}
            >
              Deactivate account
            </Text>
          </Card.Content>
        </Card>
      </BodyContainer>
      <NavBar history={history} selectedIcon="" />
    </PhoneView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },

  icon: {
    paddingRight: 10,
  },

  rowFlex: {
    flexDirection: "row",
    height: 40,
    alignItems: "center",
    borderBottomColor: "gray",
    borderBottomWidth: 1,
  },

  lastRowFlex: {
    flexDirection: "row",
    height: 50,
    alignItems: "center",
  },

  leftContainer: {
    flex: 0.5,
    flexDirection: "row",
    justifyContent: "flex-start",
    width: "50%",
  },
  rightContainer: {
    flex: 0.5,
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "flex-end",
    width: "50%",
  },

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

  optCardWideWarning: {
    borderRadius: 8,
    width: "95%",
    //height: 220,
    //padding: 10,
    backgroundColor: "red",
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
  opt: {
    borderRadius: 0,
    width: 280,
    height: 120,
    borderWidth: 0,
    marginBottom: 10,
    marginLeft: 20,
    marginRight: 20,
    borderColor: "#808080",
    marginTop: 10,
    elevation: 10,
    borderBottomColor: "#7B7B81",
    borderStyle: "solid",
  },

  optValue: {
    fontSize: 14,
    alignSelf: "flex-start",
    color: "gray",
    marginBottom: 5,
    alignSelf: "flex-end",
    paddingRight: 10,
  },
});

export default ProfileSettings;
