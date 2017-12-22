import React from "react";
import { Avatar, Icon } from 'react-native-elements';
import Ionicons from "react-native-vector-icons/Ionicons";
import FontAwesome from "react-native-vector-icons/FontAwesome";

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
            alignItems: "center",
            backgroundColor: "#fff",
          }}>
          <View
            style={{
              height: 300,
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
                color="#61ba66"
                size={80}
                style={{
                  backgroundColor: "transparent"
                }}
              />
              <View
                style={{
                  backgroundColor: "#00000010",
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
          </View>
          <View
            style={{
              alignItems: "center",
              maxWidth: 220,
            }}>
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
              }}
            >
              Church Center uses your location to search for nearby churches.
            </Text>
            <View
              style={{
                marginTop: 32
              }}>
              <TextInput
                placeholder="Enter zip code"
                style={{
                  color: "#878685",
                  padding: 16,
                  borderWidth: 1,
                  borderColor: "#ddd",
                  borderStyle: "solid",
                  borderRadius: 3,
                }}
              />
              <Text
                style={{
                  color: "#87868550",
                  marginTop: 8,
                  marginBottom: 8,
                  textAlign: "center"
                }}>
                or
              </Text>
              <View
                style={{
                  flexDirection: "row"
                }}>
                <FontAwesome
                  name="location-arrow"
                  color="#007aff"
                  size={16}
                  style={{
                    backgroundColor: "transparent",
                    marginRight: 8,
                  }}
                />
                <Text
                  style={{
                    color: "#007aff"
                  }}>
                  Use current location
                </Text>
              </View>
            </View>
          </View>
        </View>
      )
  }
}
