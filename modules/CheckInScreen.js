import React from "react";
import { Avatar, Icon } from "react-native-elements";
import Ionicons from "react-native-vector-icons/FontAwesome";

import {
  StyleSheet,
  View,
  Text,
  Button,
  ScrollView,
  FlatList,
  TouchableOpacity
} from "react-native";

export class CheckInScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false
    };
  }

  static navigationOptions = {
    title: "Check In"
  };

  render() {
    const { navigate } = this.props.navigation;

    const events = this.props.screenProps.appState.checkInsEvents.data;

    const checkInList = [
      {
        avatar:
          "https://s3.amazonaws.com/uifaces/faces/twitter/azielsilas/128.jpg",
        name: "Benjamin Stiles",
        time: "10:30am",
        location: "Security"
      },
      {
        avatar:
          "https://s3.amazonaws.com/uifaces/faces/twitter/adellecharles/128.jpg",
        name: "Jenifer Blanchet",
        time: "10:30am",
        location: "Worship Team",
        selected: true
      },
      {
        avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/vista/128.jpg",
        name: "Sue Kim",
        time: "9:00am",
        location: "Children's Ministry",
        selected: true
      },
      {
        avatar:
          "https://s3.amazonaws.com/uifaces/faces/twitter/felipenogs/128.jpg",
        name: "Enrique Cruz",
        time: "10:30am",
        location: "Worship Team"
      }
    ];

    var styles = StyleSheet.create({
      Person: {
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
        padding: 16,
        borderBottomWidth: 1,
        borderBottomColor: "#e5e5e5"
      },
      PersonSelected: {
        backgroundColor: "#fff"
      },
      Indicator: {
        opacity: 0,
        position: "absolute",
        backgroundColor: "#6cc271",
        width: 26,
        height: 26,
        borderRadius: 28,
        alignItems: "center",
        justifyContent: "center",
        right: -4,
        top: -2
      },
      IndicatorSelected: {
        opacity: 1
      }
    });

    return (
      <View
        style={{
          flex: 1,
          backgroundColor: "#f3f3f2",
          alignItems: "center",
          justifyContent: "flex-start"
        }}
      >
        {checkInList.map((item, i) => (
          <View
            key={i}
            style={[
              styles.Person,
              this.state.active && i === 1 && styles.PersonSelected
            ]}
          >
            <View style={{ position: "relative" }}>
              <Avatar
                rounded
                source={{ uri: `${item.avatar}` }}
                onPress={() =>
                  this.setState({ active: !this.state.active && i === 1 })
                }
                activeOpacity={0.7}
                width={60}
                height={60}
              />
              <View
                style={[
                  styles.Indicator,
                  this.state.active && i === 1 && styles.IndicatorSelected
                ]}
              >
                <Icon name="check" type="font-awesome" color="#fff" size={14} />
              </View>
            </View>

            <View style={{ flex: 1, paddingLeft: 16 }}>
              <Text
                style={{ color: "#585756", fontSize: 18, paddingBottom: 4 }}
              >
                {item.name}
              </Text>
              <View style={{ flexDirection: "row" }}>
                <Icon name="clock" type="feather" color="#878685" size={12} />
                <Text
                  style={{
                    fontSize: 12,
                    color: "#878685",
                    paddingLeft: 4,
                    marginRight: 12
                  }}
                >
                  {item.time}
                </Text>
                <Icon name="map-pin" type="feather" color="#878685" size={12} />
                <Text
                  style={{ fontSize: 12, color: "#878685", paddingLeft: 4 }}
                >
                  {item.location}
                </Text>
              </View>
            </View>
            {this.state.active && i === 1 ? (
              <Ionicons
                name="qrcode"
                size={26}
              />
            ) : (
              <Icon
                name="chevron-small-down"
                type="entypo"
                color="#878685"
                size={24}
              />
            )}
          </View>
        ))}

        {/* { this.state.active && (
          <TouchableOpacity
            style={{
              backgroundColor: "#6cc271",
              borderRadius: 100,
              paddingTop: 2,
              paddingRight: 32,
              paddingBottom: 2,
              paddingLeft: 32,
              marginTop: "auto",
              marginBottom: 32,
            }}
            >
              <Button color="white" title="Pre-check" onPress={() => {}} />
          </TouchableOpacity>
        )} */}
      </View>
    );
  }
}
