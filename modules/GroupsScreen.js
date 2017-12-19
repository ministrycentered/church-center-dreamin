import React from "react";

import { StyleSheet, View, Text, Button } from "react-native";

export class GroupsScreen extends React.Component {
  static navigationOptions = {
    title: "Groups"
  };

  render() {
    const { navigate } = this.props.navigation;

    return (
      <View
        style={{
          flex: 1,
          backgroundColor: "#fff",
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        <Text style={{ fontSize: 40, fontWeight: "bold" }}>Groups</Text>
      </View>
    );
  }
}
