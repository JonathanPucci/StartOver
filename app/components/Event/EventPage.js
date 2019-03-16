import React, { Component } from "react";
import Moment from "moment";
import {
  ActivityIndicator,
  ListView,
  Text,
  View,
  Image,
  FlatList,
  StyleSheet,
  ImageBackground
} from "react-native";

const BASKETBALL = "Basketball";
const FOOTBALL = "Football";
const HANDBALL = "Handball";

const DEFAULT_IMG = "./img/favicon.png";

export default class EventPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "Hello world Hello !",
      date: new Date(),
      sport: FOOTBALL,
      place: "Nowhere"
    };
    this.renderImage = this.renderImage.bind(this);
  }

  renderImage(path) {
    Moment.locale("en");
    return (
      <ImageBackground
        source={require("../../img/FootBackground.jpeg")}
        style={styles.globalView}
      >
        <View style={styles.transparent}>
          <Text style={styles.dateStyle}>
            When: {Moment(this.state.date).format("d MMM")}
          </Text>
          <Image style={styles.imageStyle} source={path} />
          <Text style={styles.placeStyle}>Where: {this.state.place}</Text>
          <FlatList
            style={styles.listStyle}
            data={[
              { key: "Jo" },
              { key: "Nathan" },
              { key: "Gui" },
              { key: "Lee" },
              { key: "Fifi" },
              { key: "Riri" },
              { key: "Kiki" }
            ]}
            renderItem={({ item }) => <Text>{item.key}</Text>}
          />
        </View>
      </ImageBackground>
    );
  }

  render() {
    let path = DEFAULT_IMG;
    if (this.state.sport === BASKETBALL) {
      path = require("../../img/Foot.jpeg");
    } else if (this.state.sport === FOOTBALL) {
      path = require("../../img/Foot.jpeg");
    } else if (this.state.sport === HANDBALL) {
      path = require("../../img/Foot.jpeg");
    }
    return this.renderImage(path);
  }
}

const styles = StyleSheet.create({
  globalView: {
    flex: 1,
    alignSelf: "stretch",
    width: null
  },
  transparent: {
    backgroundColor: "transparent",
    marginHorizontal: 5,
    marginVertical: 15
  },
  listStyle: {
    // color: "blue",
    // fontWeight: "bold",
    // fontSize: 30
  },
  dateStyle: {
    color: "red"
  },
  imageStyle: {
    width: 50,
    height: 50
  },
  placeStyle: {}
});
