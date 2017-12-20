import React from "react";

import {
  StyleSheet,
  View,
  Text,
  Button,
  ScrollView,
  FlatList
} from "react-native";

export class CheckInScreen extends React.Component {
  static navigationOptions = {
    title: "Check In"
  };

  render() {
    const { navigate } = this.props.navigation;

    const events = this.props.screenProps.appState.checkInsEvents.data;

    return (
      <ScrollView
        contentContainerStyle={{
          flex: 1,
          backgroundColor: "#fff",
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        <FlatList
          data={events}
          renderItem={({ item }) => <Text>{item.attributes.name}</Text>}
        />
      </ScrollView>
    );
  }
}
