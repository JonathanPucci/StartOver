import { Calendar, CalendarList, Agenda } from "react-native-calendars";

import React, { Component } from "react";
import MapView from "react-native-maps";
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Dimensions
} from "react-native";

const styles = StyleSheet.create({
  headerBackground: {
    flex: 1,
    width: null,
    alignSelf: "stretch"
  },
  container: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)"
  },
  text: {
    color: "white",
    padding: 10
  }
});

export default class CalendarPage extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ImageBackground
          style={styles.headerBackground}
          source={require("../../img/basketball-court-wallpaper-2.jpg")}
        />
      </View>
    );
  }
}
