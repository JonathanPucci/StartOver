import React, { Component } from "react";
import MaterialCommunityIcon from "react-native-vector-icons/MaterialCommunityIcons";
import { AppRegistry, StyleSheet, Text, View, Dimensions } from "react-native";

const styles = StyleSheet.create({
  paginationStyle: {
    position: "absolute",
    bottom: 10,
    alignSelf: "center"
  },
  icon: {
    width: "20%"
  },
  active: {
    color: "blue"
  }
});

export default class Pagination extends Component {
  renderPagination = (index, total, context) => {
    return (
      <View style={styles.paginationStyle}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between"
          }}
        >
          <MaterialCommunityIcon
            style={styles.icon}
            name="calendar"
            size={30}
            color={index == 0 ? "blue" : "white"}
            onPress={() => {
              if (index != 0) {
                context.scrollBy(-index);
              }
            }}
          />
          <MaterialCommunityIcon
            style={styles.icon}
            name="face"
            size={30}
            color={index == 1 ? "blue" : "white"}
            onPress={() => {
              if (index != 1) {
                context.scrollBy(1 - index);
              }
            }}
          />
          <MaterialCommunityIcon
            style={styles.icon}
            name="map"
            size={30}
            color={index == 2 ? "blue" : "white"}
            onPress={() => {
              if (index != 2) {
                context.scrollBy(2 - index);
              }
            }}
          />
          <MaterialCommunityIcon
            style={styles.icon}
            name="settings"
            size={30}
            color={index == 3 ? "blue" : "white"}
            onPress={() => {
              if (index != 3) {
                context.scrollBy(3 - index);
              }
            }}
          />
        </View>
      </View>
    );
  };
}
