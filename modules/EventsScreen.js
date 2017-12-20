import React from "react";

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
        data={events}
        refreshing={this.state.refreshing}
        onRefresh={() =>
          this.setState({ refreshing: true }, () => {
            setTimeout(() => this.setState({ refreshing: false }), 1000);
          })
        }
        renderItem={({ item }) => (
          <View>
            <TouchableOpacity
              onPress={() => {
                navigate("ShowEvent", { ...item });
              }}
            >
              <Image
                style={{ width: "100%", height: 224 }}
                source={{
                  uri:
                    "https://d141ugdjiohsni.cloudfront.net/assets/logo-blank-b693a704d75dc22e9375a3a3863ab09b56d9197a298e6e1138ff95e902335eb3.jpg"
                }}
                onPress={() => {}}
              />
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: "600",
                  marginBottom: 16,
                  padding: 16
                }}
              >
                {item.attributes.name}
              </Text>
            </TouchableOpacity>
          </View>
        )}
      />
    );
  }
}

export class ShowEvent extends React.Component {
  render() {
    return (
      <View>
        <Text>{this.props.navigation.state.params.name}</Text>
      </View>
    );
  }
}
