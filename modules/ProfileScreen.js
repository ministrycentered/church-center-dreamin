import React from "react";

import {
  StyleSheet,
  View,
  Text,
  Button,
  Image,
  TouchableOpacity,
  FlatList
} from "react-native";

import { Avatar } from "react-native-elements";

let headers = new Headers();
headers.append(
  "Authorization",
  "Basic ***TOKENHERE***"
);

const fetchMe = callback =>
  fetch(`https://api.planningcenteronline.com/people/v2/me`, {
    method: "GET",
    headers: headers
  })
    .then(res => res.json())
    .then(callback);

export class ProfileScreen extends React.Component {
  static navigationOptions = {
    title: "My Profile"
  };

  state = { me: null };

  componentDidMount() {
    fetchMe(({ data: me }) => this.setState({ me }));
  }

  render() {
    const { navigate } = this.props.navigation;

    return (
      <View
        style={{
          flex: 1,
          flexDirection: "column",
          backgroundColor: "#fff",
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        {this.state.me && (
          <View style={{ display: "flex", flexDirection: "row", padding: 16 }}>
            <Avatar
              large
              rounded
              source={{
                uri: this.state.me.attributes.avatar
              }}
              onPress={() => console.log("Works!")}
              activeOpacity={0.7}
            />

            <View style={{ flex: 1 }}>
              <Text>{this.state.me.attributes.first_name}</Text>
              <Text>My Church</Text>
            </View>
          </View>
        )}
        <View
          style={{
            flex: 1,
            alignItems: "flex-start",
            justifyContent: "flex-start",
            width: "100%"
          }}
        >
          <Button title="Edit Profile" onPress={() => {}} />
          <Button title="Household" onPress={() => {}} />
          <Button title="Payment Info" onPress={() => {}} />
          <Button title="My Groups" onPress={() => {}} />
          <Button title="My Teams" onPress={() => {}} />
          <Button title="Notification" onPress={() => {}} />
        </View>
      </View>
    );
  }
}
