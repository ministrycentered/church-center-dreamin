import React from "react";

import { Icon, List, ListItem } from 'react-native-elements';

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

    const list = [
      { title: 'Edit Profile' },
      { title: 'Household' },
      { title: 'Payment Info' },
      { title: 'My Groups' },
      { title: 'My Teams' },
      { title: 'Notifications' },
    ]

    return (
      <ScrollView>
        <View
          style={{
            flex: 1,
            flexDirection: "column",
            backgroundColor: "#f3f2f2",
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          {me && (
            <View
              style={{ display: "flex", flexDirection: "row", alignItems: "center", backgroundColor: "#fff", padding: 16 }}
            >
              <Avatar
                rounded
                source={{
                  uri: me.attributes.avatar
                }}
                onPress={() => {}}
                activeOpacity={0.7}
                width={80}
                height={80}
                containerStyle={{ marginRight: 24 }}
              />

              <View style={{ flex: 1 }}>
                <Text style={{ color: "#585756", fontSize: 20 }}>{me.attributes.first_name} {me.attributes.last_name}</Text>
                <Text style={{ color: "#878685", fontSize: 14, paddingTop: 4 }}>Planning Center Staff</Text>
                {/*<Text>{me.attributes.birthdate}</Text>
                <Text>{me.attributes.anniversary}</Text>
                <Text>{me.attributes.avatar}</Text>
                <Text>{me.attributes.child}</Text>
                <Text>{me.attributes.created_at}</Text>
                <Text>{me.attributes.demographic_avatar_url}</Text>
                <Text>{me.attributes.gender}</Text>
                <Text>{me.attributes.given_name}</Text>
                <Text>{me.attributes.grade}</Text>
                <Text>{me.attributes.graduation_year}</Text>
                <Text>{me.attributes.inactivated_at}</Text>
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
                <Text>{me.attributes.updated_at}</Text>*/}
              </View>
            </View>
          )}
          <View
            style={{
              flex: 1,
              alignItems: "flex-start",
              justifyContent: "flex-start",
              width: "100%",
              paddingTop: 4,
              paddingRight: 24,
              paddingBottom: "100%",
              paddingLeft: 24
            }}
          >
            <List
              containerStyle={{
                width: "100%",
                borderWidth: 1,
                borderColor: "#dfdfdf",
                borderBottomWidth: 0
              }}>
              {
                list.map((item, i) => (
                  <ListItem
                    key={i}
                    title={item.title}
                    onPress={() => {}}
                    titleStyle={{ fontSize: 14, color: "#878685" }}
                    containerStyle={{
                      borderBottomColor: '#dfdfdf',
                      borderBottomWidth: 0.5
                    }}
                  />
                ))
              }
            </List>
          </View>
        </View>
      </ScrollView>
    );
  }
}
