import React from "react";
import { Avatar, Icon } from 'react-native-elements';
import Ionicons from "react-native-vector-icons/Ionicons";

import {
  StyleSheet,
  View,
  Text,
  Button,
  TextInput,
  FlatList
} from "react-native";

export class LocationScreen extends React.Component {
  static navigationOptions = {
    title: "Location"
  };

  render() {
      return (
        <View
          style={{
            flex: 1,
            backgroundColor: "#fff",
          }}>
          <View
            style={{
              height: 350,
              alignItems: "center",
              justifyContent: "flex-end",
            }}>
            <View
              style={{
                alignItems: "center",
                marginBottom: 16,
              }}>
              <Ionicons
                name="ios-pin-outline"
                color="#007aff"
                size={80}
                style={{
                  backgroundColor: "transparent"
                }}
              />
              <View
                style={{
                  backgroundColor: "#00000020",
                  width: 50,
                  height: 50,
                  borderRadius: 50,
                  position: "absolute",
                  bottom: 0,
                  transform: [
                    { scaleY: 0.2 },
                    { translateY: 42 },
                  ],
                  zIndex: -1,
                }}>
              </View>
            </View>
            <View>
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: "bold",
                  color: "#585756",
                  textAlign: "center",
                  marginBottom: 8,
                }}>
                Find Your Church
              </Text>
              <Text
                style={{
                  color: "#878685",
                  textAlign: "center",
                  maxWidth: 220,
                }}
              >
                Church Center uses your location to search for nearby churches.
              </Text>
            </View>
          </View>
        </View>
      )
  }
}
