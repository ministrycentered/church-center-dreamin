import React from "react";
import { StyleSheet, Text, View, Image, FlatList, Button } from "react-native";
import { TabNavigator, StackNavigator } from "react-navigation";

import { CheckInScreen } from "./modules/CheckInScreen";
import { EventsScreen, ShowEvent } from "./modules/EventsScreen";
import {
  GiveScreen as GiveHome,
  GiveDonation,
  GiveMethod,
  GiveSummary,
  GiveComplete
} from "./modules/GiveScreen";
import { GroupsScreen, ShowGroup } from "./modules/GroupsScreen";
import { HomeScreen } from "./modules/HomeScreen";
import { ProfileScreen } from "./modules/ProfileScreen";
import {
  LocationScreen,
  LocationList,
} from "./modules/LocationScreen";

import Ionicons from "react-native-vector-icons/Ionicons";

import { TOKEN } from "./modules/SECRETS";

import { groups } from "./modules/fakeData";

let headers = new Headers();
headers.append("Authorization", `Basic ${TOKEN}`);

const Navigation = TabNavigator(
  {
    Give: {
      screen: StackNavigator({
        // GiveHome: {
        //   screen: GiveHome
        // },
        GiveDonation: {
          screen: GiveDonation
        },
        GiveMethod: {
          screen: GiveMethod
        },
        GiveSummary: {
          screen: GiveSummary
        },
        GiveComplete: {
          screen: GiveComplete
        }
      }),
      navigationOptions: {
        tabBarLabel: "Give",
        tabBarIcon: ({ tintColor, focused }) => (
          <Ionicons
            name={focused ? "ios-cash" : "ios-cash-outline"}
            size={26}
            style={{ color: tintColor }}
          />
        )
      }
    },
    CheckIn: {
      screen: StackNavigator({
        CheckIn: {
          screen: CheckInScreen
        }
      }),
      navigationOptions: {
        tabBarLabel: "Check In",
        tabBarIcon: ({ tintColor, focused }) => (
          <Ionicons
            name={
              focused ? "ios-checkmark-circle" : "ios-checkmark-circle-outline"
            }
            size={26}
            style={{ color: tintColor }}
          />
        )
      }
    },
    Home: {
      screen: StackNavigator(
        {
          Home: {
            screen: HomeScreen,
            navigationOptions: ({ navigation, screenProps }) => ({
              title: screenProps.appState.org.data.attributes.name,
              headerLeft: (
                <Ionicons
                  name="ios-download"
                  size={26}
                  onPress={() => navigation.navigate("Profile")}
                  style={{ paddingLeft: 24 }}
                />
              ),
              headerRight: (
                <Ionicons
                  name="ios-happy"
                  size={26}
                  onPress={() => navigation.navigate("Profile")}
                  style={{ paddingRight: 24 }}
                />
              )
            })
          },
          Profile: {
            screen: ProfileScreen,
            navigationOptions: ({ navigation }) => ({
              headerLeft: null,
              headerRight: (
                <Button title="Done" onPress={() => navigation.goBack()} />
              )
            })
          },
          QuickCheckIn: { screen: CheckInScreen }
        },
        { mode: "modal" }
      ),
      navigationOptions: {
        tabBarLabel: "Home",
        tabBarIcon: ({ tintColor, focused }) => (
          <Ionicons
            name={focused ? "ios-home" : "ios-home-outline"}
            size={26}
            style={{ color: tintColor }}
          />
        )
      }
    },
    Groups: {
      screen: StackNavigator({
        // Groups: {
        //   screen: GroupsScreen
        // },
        ShowGroup: {
          screen: ShowGroup
        }
      }),
      navigationOptions: {
        tabBarLabel: "Groups",
        tabBarIcon: ({ tintColor, focused }) => (
          <Ionicons
            name={focused ? "ios-people" : "ios-people-outline"}
            size={26}
            style={{ color: tintColor }}
          />
        )
      }
    },
    Events: {
      screen: StackNavigator({
        Events: {
          screen: EventsScreen
        },
        ShowEvent: {
          screen: ShowEvent
        }
      }),
      navigationOptions: {
        tabBarLabel: "Events",
        tabBarIcon: ({ tintColor, focused }) => (
          <Ionicons
            name={focused ? "ios-calendar" : "ios-calendar-outline"}
            size={26}
            style={{ color: tintColor }}
          />
        )
      }
    }
  },
  {
    tabBarPosition: "bottom",
    // animationEnabled: true,
    tabBarOptions: {
      activeTintColor: "#e91e63"
    },
    initialRouteName: "Groups"
  }
);

const fetcher = (url, callback) =>
  fetch(url, {
    method: "GET",
    headers: headers
  })
    .then(res => res.json())
    .then(callback);

const PCOAPI = app => resource => cb =>
  fetcher(
    `https://api-staging.planningcenteronline.com/${app}/v2/${resource}`,
    cb
  );

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      me: null,
      org: {
        data: {
          attributes: { name: "" }
        }
      },
      connectedPeople: { data: [] },
      checkInsEvents: { data: [] },
      givingFunds: { data: [] },
      groups: groups,
      registrationsEvents: { data: [] }
    };
  }

  componentDidMount() {
    PCOAPI("people")("me")(me => this.setState({ me }));
    PCOAPI("people")("")(org => this.setState({ org }));
    PCOAPI("people")("me/connected_people")(connectedPeople =>
      this.setState({ connectedPeople })
    );
    PCOAPI("check_ins")("events")(checkInsEvents =>
      this.setState({ checkInsEvents })
    );
    PCOAPI("registrations")("events")(registrationsEvents =>
      this.setState({ registrationsEvents })
    );
    PCOAPI("giving")("funds")(givingFunds => this.setState({ givingFunds }));

    // fetch("https://groups.planningcenteronline.com/api/v1/groups.json", {
    //   method: "GET",
    //   headers: headers
    // })
    //   .then(function(response) {
    //     if (!response.ok) {
    //       throw Error(response.statusText);
    //     }
    //     return response;
    //   })
    //   .then(res => res.json())
    //   .then(data => console.log(data))
    //   .catch(function(error) {
    //     console.log(error);
    // });
  }

  render() {
    return <Navigation screenProps={{ appState: { ...this.state } }} />;
  }
}
