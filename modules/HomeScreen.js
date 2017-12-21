import React from "react";

import { StyleSheet, View, Text, Button, TouchableOpacity } from "react-native";
import { Icon } from 'react-native-elements';

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
          backgroundColor: "#fff",
          alignItems: "center",
          justifyContent: "center",
          paddingTop: 72,
          flex: 1
        }}
      >
      <Icon
        name='sun'
        type='feather'
        color='#fda629'
        size={48}
      />
    <Text style={{ fontSize: 24, color: "#585756", fontWeight: "bold", paddingTop: 16 }}>Good morning, Michael!</Text>
        <Text style={{ padding: 32, textAlign: "center", fontSize: 20, color: "#878685" }}>
          You're scheduled for Security at the 10:30am Traditional Service
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
            marginTop: "auto",
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
