import React from "react";
import { StyleSheet, Text, View, ImageBackground, Image } from "react-native";
import EntypoIcon from "react-native-vector-icons/Entypo";
import MaterialCommunityIcon from "react-native-vector-icons/MaterialCommunityIcons";
import SportStat from "./SportStat";

export default class Stats extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View
          style={{
            flex: 0.5
          }}
        >
          <View style={styles.line}>
            <Text style={(styles.text, styles.header)}>Niveau </Text>
          </View>
          <View style={styles.line}>
            <View style={styles.indentedLevelSport}>
              <SportStat sport="basketball" />
            </View>
            <View style={styles.indentedLevelSport}>
              <SportStat sport="football" />
            </View>
          </View>
          <View style={styles.line}>
            <View style={styles.indentedLevelSport}>
              <SportStat sport="tennisball" />
            </View>
            <View style={styles.indentedLevelSport}>
              <SportStat sport="basketball-outline" />
            </View>
          </View>
        </View>

        <View
          style={{
            flex: 0.5
          }}
        >
          <View style={styles.line}>
            <Text style={(styles.text, styles.header)}>Stats </Text>
            <MaterialCommunityIcon
              style={styles.icon}
              name="human-handsup"
              size={30}
              color="white"
            />
          </View>

          <View style={styles.indented}>
            <View style={[styles.line]}>
              <Text style={styles.text}>Participations </Text>
              <Text style={[styles.text, styles.stat]}>25</Text>
            </View>
            <View style={[styles.line]}>
              <Text style={styles.text}>Organisations </Text>
              <Text style={[styles.text, styles.stat]}>12</Text>
            </View>
            <View style={[styles.line]}>
              <Text style={styles.text}>Incrusts </Text>
              <Text style={[styles.text, styles.stat]}> 3</Text>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  line: {
    flexDirection: "row"
  },
  indented: {
    paddingLeft: 30
  },
  indentedLevelSport: {
    // paddingLeft: 20
  },
  text: {
    color: "white"
  },
  stat: {
    paddingLeft: 30
    //top: 5
  },
  header: {
    color: "white",
    fontWeight: "bold",
    padding: 10,
    fontSize: 20
  },
  incrustIndent: {
    color: "white",
    left: 43,
    top: 10
  }
});
