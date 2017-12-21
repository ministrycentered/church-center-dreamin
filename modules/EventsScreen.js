import React from "react";

import format from "date-fns/format";

import {
  StyleSheet,
  View,
  Text,
  Button,
  ScrollView,
  FlatList,
  Image,
  TouchableOpacity
} from "react-native";

const EventItem = props => (
  <View>
    <TouchableOpacity
      style={{ backgroundColor: "white" }}
      onPress={() => {
        props.navigate("ShowEvent", { ...props.item });
      }}
    >
      <Image
        style={{ width: "100%", height: 224 }}
        source={{
          uri:
            props.item.attributes.logo ||
            "https://d141ugdjiohsni.cloudfront.net/assets/logo-blank-b693a704d75dc22e9375a3a3863ab09b56d9197a298e6e1138ff95e902335eb3.jpg"
        }}
        onPress={() => {}}
      />
      <View
        style={{
          flexDirection: "row",
          padding: 16,
          alignItems: "center",
        }}
      >
        <Text
          style={{
            fontSize: 20,
            fontWeight: "600",
            color: "#585756",
            flex: 1
          }}
        >
          {props.item.attributes.name}
        </Text>
        <View style={{ alignItems: "center" }}>
          <Text style={{ fontSize: 20, fontWeight: "500" }}>
            {format(props.date, `DD`)}
          </Text>
          <Text style={{ fontSize: 11, fontWeight: "100" }}>
            {format(props.date, `MMM`).toUpperCase()}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  </View>
);

export class EventsScreen extends React.Component {
  static navigationOptions = {
    title: "Events"
  };

  state = { refreshing: false };

  render() {
    const { navigate } = this.props.navigation;

    const events = this.props.screenProps.appState.registrationsEvents.data;

    return (
      <FlatList
        data={events.map(e => ({ key: e.id, ...e }))}
        refreshing={this.state.refreshing}
        onRefresh={() =>
          this.setState({ refreshing: true }, () => {
            setTimeout(() => this.setState({ refreshing: false }), 1000);
          })
        }
        renderItem={({ item }) => (
          <EventItem
            date={new Date(item.attributes.created_at)}
            item={item}
            navigate={navigate}
          />
        )}
      />
    );
  }
}

export class ShowEvent extends React.Component {
  render() {
    const { navigate } = this.props.navigation;

    return (
      <View style={{ backgroundColor: "#fff", flex: 1 }}>
        <EventItem
          item={{ attributes: this.props.navigation.state.params.attributes }}
          date={
            new Date(this.props.navigation.state.params.attributes.created_at)
          }
          navigate={navigate}
        />
        <View style={{
          backgroundColor: "#f3f3f3",
          flex: 1,
          alignItems: "center"
        }}>
          <Text style={{ padding: 16, fontSize: 14, lineHeight: 20 }}>Alpha is a series of sessions exploring the Christian faith. Each talk looks at a different question around faith and is designed to create conversation. Alpha is run all around the globe, and everyone's welcome. It runs in cafés, churches, universities, homes—you name it. No two Alphas look the same, but generally they have three key things in common: food, a talk and good conversation.</Text>
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
            <Button color="white" title="Register" onPress={() => {}} />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
