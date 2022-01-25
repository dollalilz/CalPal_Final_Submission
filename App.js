import React from 'react';
import { StyleSheet, View } from 'react-native';
import { NativeRouter, Route, Switch } from 'react-router-native';
import Signup from './Components/Signup';
import TransitionScreen from './Components/TransitionScreen';
import Login from './Components/Login';
import Home from './Components/Home';
import Calendar from './Components/Calendar';
import Meetup from './Components/Meetup';
import NavBar from './Components/NavBar';
import Friends from './pages/Friends';
import Notifications from './pages/Notifications';
import PersonalProfile from './pages/PersonalProfile';
import ProfileSettings from './pages/ProfileSettings';
import BubbleTea from './pages/BubbleTea';

export default function App() {
  return (
    <NativeRouter>
      <View style={styles.container}>
          <Switch>
            <Route exact path="/" component={TransitionScreen} />
            <Route exact path="/Signup" component={Signup} />
            <Route exact path="/Login" component={Login} />
            <Route exact path="/Home" component={Home} />
            <Route exact path="/Calendar" component={Calendar} />
            <Route exact path="/NavBar" component={NavBar} />
            <Route exact path="/Meetup" component={Meetup} />
            <Route exact path="/Friends" component={Friends} />
            <Route exact path="/Notifications" component={Notifications} />
            <Route exact path="/PersonalProfile" component={PersonalProfile} />
            <Route exact path="/ProfileSettings" component={ProfileSettings} />
            <Route exact path="/BubbleTea" component={BubbleTea} />
          </Switch>
      </View>
    </NativeRouter>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
