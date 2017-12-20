import React from "react";

import { StyleSheet, View, Text, Button, FlatList, Image } from "react-native";

export class GroupsScreen extends React.Component {
  static navigationOptions = {
    title: "Groups"
  };

  state = { refreshing: false };

  render() {
    const { navigate } = this.props.navigation;

    const groups = this.props.screenProps.appState.groups.groups;

    return (
      <FlatList
        data={groups.map(g => ({ key: g.id, ...g })).slice(0, 4)}
        refreshing={this.state.refreshing}
        onRefresh={() =>
          this.setState({ refreshing: true }, () => {
            setTimeout(() => this.setState({ refreshing: false }), 1000);
          })
        }
        renderItem={({ item }) => (
          <View style={{ position: "relative" }}>
            {console.log(item)}
            <Image
              style={{ width: "100%", height: 224 }}
              source={{
                uri:
                  item.header_image_medium ||
                  "https://d141ugdjiohsni.cloudfront.net/assets/logo-blank-b693a704d75dc22e9375a3a3863ab09b56d9197a298e6e1138ff95e902335eb3.jpg"
              }}
              onPress={() => {}}
            />

            <Text
              style={{
                fontSize: 22,
                position: "absolute",
                width: "100%",
                bottom: 0,
                color: "#303030",
                backgroundColor: "rgba(255,255,255,0.7)",
                fontWeight: "700",
                textAlign: "center",
                padding: 16,
                overflow: "hidden",
                textOverflow: "ellipsis"
              }}
            >
              {item.name.length > 28
                ? item.name.substring(0, 28 - 1) + "…"
                : item.name}
            </Text>
          </View>
        )}
      />
    );
  }
}

export class ShowGroup extends React.Component {
  static navigationOptions = {
    title: "Groups"
  };

  state = { refreshing: false };

  render() {
    const { navigate } = this.props.navigation;

    const group = this.props.screenProps.appState.groups.groups[1];

    return (
      <View style={{ flex: 1, backgroundColor: "white" }}>
        <View style={{ position: "relative" }}>
          {console.log(group)}
          <Image
            style={{ width: "100%", height: 224 }}
            source={{
              uri:
                group.header_image_medium ||
                "https://d141ugdjiohsni.cloudfront.net/assets/logo-blank-b693a704d75dc22e9375a3a3863ab09b56d9197a298e6e1138ff95e902335eb3.jpg"
            }}
            onPress={() => {}}
          />

          <Text
            style={{
              fontSize: 22,
              position: "absolute",
              width: "100%",
              bottom: 0,
              color: "#303030",
              backgroundColor: "rgba(255,255,255,0.8)",
              fontWeight: "700",
              textAlign: "center",
              padding: 16,
              overflow: "hidden",
            }}
          >
            {group.name.length > 28
              ? group.name.substring(0, 28 - 1) + "…"
              : group.name}
          </Text>
        </View>
        <View style={{ padding: 16 }}>
          <Text style={{ fontSize: 16, fontWeight: "600" }}>Upcoming Events</Text>
        </View>
        <View style={{ padding: 16 }}>
          <Text style={{ fontSize: 16, fontWeight: "600" }}>Members</Text>
        </View>
      </View>
    );
  }
}
