import React, { Component } from "react";
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Dimensions
} from "react-native";
import EntypoIcon from "react-native-vector-icons/Entypo";
import MaterialIcon from "react-native-vector-icons/MaterialCommunityIcons";

import Header from "./Header";

import Stats from "./Stats";
import SocialLinks from "./SocialLinks";

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
  },
  lineRight: {
    position: "absolute",
    flexDirection: "row",
    right: 0,
    bottom: 10
  }
});

export default class ProfilePage extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ImageBackground
          style={styles.headerBackground}
          source={require("../../img/basketball-court-wallpaper-2.jpg")}
        >
          <View style={styles.container}>
            <View
              style={{
                flex: 0.4
              }}
            >
              <Header />
            </View>
            <View
              style={{
                flex: 0.5
              }}
            >
              <Stats />
            </View>
            <View
              style={{
                flex: 0.1
              }}
            >
              <SocialLinks />
            </View>
          </View>
        </ImageBackground>
      </View>
    );
  }
}
