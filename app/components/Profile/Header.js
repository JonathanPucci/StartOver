import React from "react";
import { StyleSheet, Text, View, ImageBackground, Image } from "react-native";

export default class Header extends React.Component {
  render() {
    return (
      <View style={styles.header}>
        <View style={styles.profilepicWrap}>
          <Image
            style={styles.profilepic}
            source={require("../../img/basketball-court-wallpaper-2.jpg")}
          />
        </View>

        <Text style={styles.name}>John Doe</Text>
        <Text style={styles.pos}>Actor / Martial Artist</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  profilepicWrap: {
    width: 100,
    height: 100,
    borderRadius: 80,
    borderColor: "rgba(0,0,0,0.4)",
    borderWidth: 10,
    marginTop: 50
  },
  profilepic: {
    flex: 1,
    width: null,
    alignSelf: "stretch",
    borderRadius: 40,
    borderColor: "#fff",
    borderWidth: 4
  },
  name: {
    marginTop: 20,
    fontSize: 30,
    color: "#fff",
    fontWeight: "bold"
  },
  pos: {
    fontSize: 14,
    color: "#1f95d0",
    fontWeight: "bold",
    fontStyle: "italic"
  }
});
