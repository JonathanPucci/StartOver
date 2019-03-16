import React from "react";
import { StyleSheet, View, Image, Dimensions, ScrollView } from "react-native";

export default class ProfilePage extends React.Component {
  render() {
    return (
      <ScrollView>
        <View style={styles.photoGrid}>
          <View style={styles.photoWrap}>
            <Image
              style={styles.photo}
              source={require("../../img/headerbg.jpg")}
            />
          </View>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  photoGrid: {
    flexDirection: "row",
    flexWrap: "wrap"
  },
  photoWrap: {
    margin: 2,
    height: 120,
    width: Dimensions.get("window").width / 2 - 4
  },
  photo: {
    flex: 1,
    width: null,
    alignSelf: "stretch"
  }
});
