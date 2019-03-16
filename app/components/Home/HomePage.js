import React, { Component } from "react";
import MapView from "react-native-maps";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";

import { AppRegistry, StyleSheet, Text, View, Dimensions } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column"
  },
  map: {
    padding: 0,
    top: 0,
    left: 20,
    right: 0,
    bottom: 0,
    width: Dimensions.get("window").width - 40,
    height: 300
  },
  title: {
    paddingTop: 30,
    flex: 0.1,
    justifyContent: "center",
    alignSelf: "center",
    color: "white",
    fontSize: 20,
    fontWeight: "bold"
  },
  mapView: {
    bottom: 200,
    flex: 0.7
  }
});

export default class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      prevPos: null,
      curPos: { latitude: 37.420814, longitude: -122.081949 },
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421
    };
    this.changePosition = this.changePosition.bind(this);
    this.updateMap = this.updateMap.bind(this);
  }

  changePosition(latOffset, lonOffset) {
    const latitude = this.state.curPos.latitude + latOffset;
    const longitude = this.state.curPos.longitude + lonOffset;
    this.setState({
      prevPos: this.state.curPos,
      curPos: { latitude: latitude, longitude: longitude }
    });
    this.updateMap();
  }

  updateMap() {
    this.map.animateToCoordinate(this.state.curPos, 2);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Home page</Text>
        <GooglePlacesAutocomplete
          query={{
            // available options: https://developers.google.com/places/web-service/autocomplete
            key: "AIzaSyClkJeyIDuIB7Ffy652uVilY3F8nRSdS8c",
            language: "en", // language of the results
            types: "(cities)" // default: 'geocode'
          }}
          fetchDetails={true}
          onPress={(data, details = null) => {
            // 'details' is provided when fetchDetails = true
            this.changePosition(
              details.geometry.location.latitude,
              details.geometry.location.longitude
            );
          }}
          placeholder="Enter Location"
          minLength={2}
          autoFocus={false}
          returnKeyType={"default"}
          fetchDetails={true}
          styles={{
            zindex: 2,
            textInputContainer: {
              backgroundColor: "rgba(0,0,0,0)",
              borderTopWidth: 0,
              borderBottomWidth: 0
            },
            textInput: {
              marginLeft: 0,
              marginRight: 0,
              height: 38,
              color: "#5d5d5d",
              fontSize: 16
            },
            predefinedPlacesDescription: {
              color: "#1faadb"
            }
          }}
          currentLocation={false}
        />
        <View style={styles.mapView}>
          <MapView
            ref={el => (this.map = el)}
            style={styles.map}
            initialRegion={{
              latitude: 37.78825,
              longitude: -122.4324,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421
            }}
          />
          <MapView.Marker
            coordinate={this.state.curPos}
            anchor={{ x: 0.5, y: 0.5 }}
          />
        </View>
      </View>
    );
  }
}
