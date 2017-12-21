import React from "react";

import { StyleSheet, View, Text, Button, TouchableOpacity } from "react-native";

export class HomeScreen extends React.Component {
  // static navigationOptions = {
  //   // title: "First Church of Awesome"
  // };

  render() {
    const { navigate } = this.props.navigation;

    const org = this.props.screenProps.appState.org;

    return (
      <View
        style={{
          flex: 1,
          backgroundColor: "#fff",
          alignItems: "center",
          justifyContent: "flex-start",
          paddingTop: 48
        }}
      >
        <Text style={{ fontSize: 24, fontWeight: "bold" }}>Good morning!</Text>
        <Text style={{ padding: 32, textAlign: "center", fontSize: 20 }}>
          You're scheduled for Securuty at the 10:30am Traditional Service
          today.
        </Text>

        <TouchableOpacity
          style={{
            backgroundColor: "#6cc271",
            borderRadius: 100,
            paddingTop: 2,
            paddingRight: 32,
            paddingBottom: 2,
            paddingLeft: 32,
            marginBottom: 32,
          }}
          >
          <Button
            color="white"
            title="Pre-check"
            onPress={() => navigate("QuickCheckIn", null)}
          />
        </TouchableOpacity>
      </View>
    );
  }
}
