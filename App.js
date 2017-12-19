import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  TouchableOpacity,
  Button
} from "react-native";
import { TabNavigator, StackNavigator } from "react-navigation";

import { CheckInScreen } from "./modules/CheckInScreen";
import { EventsScreen } from "./modules/EventsScreen";
import {
  GiveScreen as GiveHome,
  GiveDonation,
  GiveMethod,
  GiveSummary,
  GiveComplete
} from "./modules/GiveScreen";
import { GroupsScreen } from "./modules/GroupsScreen";
import { HomeScreen } from "./modules/HomeScreen";
import { ProfileScreen } from "./modules/ProfileScreen";

import Ionicons from "react-native-vector-icons/Ionicons";

export default TabNavigator(
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
      screen: StackNavigator({
        Home: {
          screen: HomeScreen
        },
        Profile: { screen: ProfileScreen }
      }),
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
        Groups: {
          screen: GroupsScreen
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
    initialRouteName: "Give"
  }
);
