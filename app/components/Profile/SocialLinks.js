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

const styles = StyleSheet.create({
  lineRight: {
    position: "absolute",
    flexDirection: "row",
    right: 0,
    bottom: 10
  },
  icon: {}
});

export default class SocialLinks extends Component {
  render() {
    return (
      <View style={styles.lineRight}>
        <EntypoIcon
          style={styles.icon}
          name="facebook"
          size={30}
          color="white"
        />
        <EntypoIcon
          style={styles.icon}
          name="twitter"
          size={30}
          color="white"
        />
        <EntypoIcon
          style={styles.icon}
          name="instagram"
          size={30}
          color="white"
        />

        <MaterialIcon
          style={styles.icon}
          name="snapchat"
          size={30}
          color="white"
        />
      </View>
    );
  }
}
