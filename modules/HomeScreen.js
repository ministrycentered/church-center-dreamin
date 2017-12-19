import React from "react";

import { StyleSheet, View, Text, Button } from "react-native";

export class HomeScreen extends React.Component {
  static navigationOptions = {
    title: "First Church of Awesome" // TODO: dynamic
  };

  render() {
    const { navigate } = this.props.navigation;

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

        <Button title="Pre-check" onPress={() => navigate("CheckIn", null)} />

        <Button
          title="My Profile"
          onPress={() => navigate("Profile", { name: "Michael Chan" })}
        />
      </View>
    );
  }
}
