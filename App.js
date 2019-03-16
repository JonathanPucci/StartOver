import React, { Component } from "react";
import { AppRegistry, StyleSheet, Text, View, Dimensions } from "react-native";
import Swiper from "react-native-swiper";
import Pagination from "./app/components/Pagination";

import ProfilePage from "./app/components/Profile/ProfilePage";
// import EventPage from "./app/components/Event/EventPage";
// import CalendarPage from "./app/components/Calendar/CalendarPage";
// import HomePage from "./app/components/Home/HomePage";

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  slideDefault: {
    flex: 1,
    backgroundColor: "#999999"
  },
  pagination: {
    height: 50
  },
  text: {
    padding: 100,
    justifyContent: "center",
    alignItems: "center",
    color: "white",
    fontSize: 20,
    fontWeight: "bold"
  }
});

export default class App extends Component {
  constructor(props) {
    super(props);
    var pagination = new Pagination();
    this.state = {
      outerScrollEnabled: true,
      renderPagination: pagination.renderPagination
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <Swiper
          loop={false}
          showsPagination={true}
          renderPagination={this.state.renderPagination}
          index={2}
          scrollEnabled={this.state.outerScrollEnabled}
        >
          <View style={styles.slideDefault}>
            <ProfilePage />
            <View style={styles.pagination} />
          </View>
          <View style={styles.slideDefault}>
            <ProfilePage />
            <View style={styles.pagination} />
          </View>
          
          <View style={styles.slideDefault}>
            <ProfilePage />
            <View style={styles.pagination} />
          </View>
          
          <View style={styles.slideDefault}>
            <ProfilePage />
            <View style={styles.pagination} />
          </View>
        </Swiper>
      </View>
    );
  }
}
