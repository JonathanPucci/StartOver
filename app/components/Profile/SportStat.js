import React from "react";
import { StyleSheet, Text, View, ImageBackground, Image } from "react-native";
import IonIcon from "react-native-vector-icons/Ionicons";
import EntypoIcon from "react-native-vector-icons/Entypo";
import MaterialCommunityIcon from "react-native-vector-icons/MaterialCommunityIcons";
import { Rating, AirbnbRating } from "react-native-ratings";

export default class SportStat extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sporticon: "ios-" + props.sport,
      disabled: "auto"
    };
    if (props.sport == "running") this.state.sporticon = "run-fast";
  }
  ratingCompleted(rating) {
    this.setState(previousState => {
      return { disabled: "none" };
    });
  }

  render() {
    return (
      <View
        style={(styles.container, styles.levels, styles.line)}
        pointerEvents={this.state.disabled}
      >
        <IonIcon
          style={styles.icon}
          name={this.state.sporticon}
          size={30}
          color="white"
        />
        <AirbnbRating
          type="star"
          count={5}
          showRating={false}
          defaultRating={5}
          size={12}
          onFinishRating={this.ratingCompleted.bind(this)}
        />
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
  text: {
    color: "white",
    padding: 0
    //left: 30
    //top: 5
  },
  icon: {
    //left: 20
    padding: 5
  },
  levels: {
    padding: 0
  },
  header: {
    color: "white",
    fontWeight: "bold",
    padding: 0
  }
});
