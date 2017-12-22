import React from "react";

import {
  StyleSheet,
  View,
  Text,
  Button,
  FlatList,
  Image,
  ScrollView
} from "react-native";
import { Avatar, Icon } from "react-native-elements";

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

    const eventsList = [
      {
        title: "Christmas Gift Exchange",
        day: 12,
        month: "DEC",
        location: "Dan's House"
      },
      {
        title: "Group Dinner",
        day: 1,
        month: "JAN",
        location: "Dan's House"
      },
      {
        title: "Bible Study",
        day: 8,
        month: "JAN",
        location: "Church Office"
      }
    ];

    const memberList = [
      {
        avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg"
      },
      {
        avatar:
          "https://s3.amazonaws.com/uifaces/faces/twitter/sillyleo/128.jpg"
      },
      { avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/jina/128.jpg" },
      {
        avatar:
          "https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg"
      }
    ];

    return (
      <ScrollView
        style={{ flex: 1, backgroundColor: "white"}}
        refreshing={this.state.refreshing}
        onRefresh={() =>
          this.setState({ refreshing: true }, () => {
            setTimeout(() => this.setState({ refreshing: false }), 1000);
          })
        }
      >
        <View style={{ position: "relative" }}>
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
              overflow: "hidden"
            }}
          >
            {group.name.length > 28
              ? group.name.substring(0, 28 - 1) + "…"
              : group.name}
          </Text>
        </View>
        <View style={{ padding: 16 }}>
          <Text style={{ fontSize: 16, fontWeight: "600" }}>
            Upcoming Events
          </Text>
        </View>

        {eventsList.map((item, i) => (
          <View
            key={i}
            style={{
              marginBottom: 16,
              flexDirection: "row",
              alignItems: "center",
              paddingLeft: 16,
              paddingRight: 16
            }}
          >
            <View
              style={{
                paddingRight: 16,
                marginRight: 16,
                alignItems: "center",
                borderRightWidth: 1,
                borderRightColor: "#e1e1e1"
              }}
            >
              <Text style={{ color: "#353535", fontSize: 14 }}>{item.day}</Text>
              <Text style={{ color: "#353535", fontSize: 14 }}>
                {item.month}
              </Text>
            </View>
            <View style={{ flex: 1 }}>
              <Text
                style={{ color: "#585756", fontSize: 16, paddingBottom: 4 }}
              >
                {item.title}
              </Text>
              <View style={{ flexDirection: "row" }}>
                <Icon name="map-pin" type="feather" color="#878685" size={12} />
                <Text
                  style={{ color: "#585756", fontSize: 12, paddingLeft: 4 }}
                >
                  {item.location}
                </Text>
              </View>
            </View>
          </View>
        ))}

        <View style={{ marginTop: 16, padding: 16 }}>
          <Text style={{ fontSize: 16, fontWeight: "600" }}>Members</Text>
        </View>
        <View style={{ flexDirection: "row", paddingLeft: 16 }}>
          {memberList.map((item, i) => (
            <Avatar
              rounded
              key={i}
              source={{ uri: `${item.avatar}` }}
              onPress={() => console.log("Works!")}
              activeOpacity={0.7}
              width={48}
              height={48}
              containerStyle={{ marginRight: 12 }}
            />
          ))}
        </View>
      </ScrollView>
    );
  }
}
