import React from "react";

import {
  StyleSheet,
  View,
  Text,
  Button,
  Image,
  TouchableOpacity,
  FlatList,
  ScrollView
} from "react-native";

import { Avatar } from "react-native-elements";

export class ProfileScreen extends React.Component {
  static navigationOptions = {
    title: "My Profile"
  };

  state = { me: null };

  render() {
    const { navigate } = this.props.navigation;

    const me = this.props.screenProps.appState.me.data;

    return (
      <ScrollView>
        <View
          style={{
            flex: 1,
            flexDirection: "column",
            backgroundColor: "#fff",
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          {me && (
            <View
              style={{ display: "flex", flexDirection: "row", padding: 16 }}
            >
              <Avatar
                large
                rounded
                source={{
                  uri: me.attributes.avatar
                }}
                onPress={() => {}}
                activeOpacity={0.7}
              />

              <View style={{ flex: 1 }}>
                <Text>{me.attributes.first_name}</Text>
                <Text>{me.attributes.anniversary}</Text>
                <Text>{me.attributes.avatar}</Text>
                <Text>{me.attributes.birthdate}</Text>
                <Text>{me.attributes.child}</Text>
                <Text>{me.attributes.created_at}</Text>
                <Text>{me.attributes.demographic_avatar_url}</Text>
                <Text>{me.attributes.first_name}</Text>
                <Text>{me.attributes.gender}</Text>
                <Text>{me.attributes.given_name}</Text>
                <Text>{me.attributes.grade}</Text>
                <Text>{me.attributes.graduation_year}</Text>
                <Text>{me.attributes.inactivated_at}</Text>
                <Text>{me.attributes.last_name}</Text>
                <Text>{me.attributes.medical_notes}</Text>
                <Text>{me.attributes.membership}</Text>
                <Text>{me.attributes.middle_name}</Text>
                <Text>{me.attributes.name}</Text>
                <Text>{me.attributes.nickname}</Text>
                <Text>{me.attributes.people_permissions}</Text>
                <Text>{me.attributes.remote_id}</Text>
                <Text>{me.attributes.school_type}</Text>
                <Text>{me.attributes.site_administrator}</Text>
                <Text>{me.attributes.status}</Text>
                <Text>{me.attributes.updated_at}</Text>
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
      </ScrollView>
    );
  }
}
