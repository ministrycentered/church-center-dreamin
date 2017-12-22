import React from "react";
import { Avatar, Icon, List, ListItem } from 'react-native-elements';
import Ionicons from "react-native-vector-icons/Ionicons";
import FontAwesome from "react-native-vector-icons/FontAwesome";

import {
  StyleSheet,
  View,
  Text,
  Button,
  TextInput,
  FlatList,
  Keyboard,
  KeyboardAvoidingView,
  TouchableOpacity,
  Alert,
} from "react-native";

export class LocationScreen extends React.Component {
  static navigationOptions = {
    title: "Location"
  };

  state = {
    zip: null,
  }

  render() {
    const { navigate } = this.props.navigation;

    return (
      <KeyboardAvoidingView
        behavior="position"
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
                maxLength={5}
                keyboardType="numeric"
                returnKeyType="done"
                onChangeText={(text) => this.setState({text})}
                onSubmitEditing={(event) => navigate("LocationList", {
                                              locationPermission: false,
                                              zip: this.state.text
                                            })}
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
              <View>
                <TouchableOpacity
                  style={{
                    flexDirection: "row"
                  }}
                  onPress={() => Alert.alert(
                    "Allow Church Center to access your location while you are using the app?",
                    "This app needs your location to search for nearby churches.",
                    [
                      {text: "Don’t Allow"},
                      {
                        text: "Allow",
                        onPress: () => {
                          navigate("LocationList", {
                            locationPermission: true,
                            zip: null
                          });
                        }
                      }
                    ]
                  )}
                >
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
                </TouchableOpacity>
              </View>
            </View>
          </View>
      </KeyboardAvoidingView>
    )
  }
}

export class LocationList extends React.Component {
  static navigationOptions = {
    title: "Nearby Churches"
  };

  render() {
    const { navigate } = this.props.navigation;
    const locationPermission = this.props.navigation.state.params.locationPermission

    const list = [
      {
        title: "C3 Church San Diego North Campus",
        address: "2716 Gateway Rd",
        city: "Carlsbad",
      },
      {
        title: "St. Katherine Orthodox Church",
        address: "2720 Loker Ave W",
        city: "Carlsbad",
      },
      {
        title: "Holy Cross Episcopal Church",
        address: "2510 Gateway Rd",
        city: "Carlsbad",
      },
      {
        title: "Faith Community Church",
        address: "2700 Rancho Pancho",
        city: "Carlsbad",
      },
      {
        title: "North Coast Church Carlsbad",
        address: "6515 Ambrosia Ln",
        city: "Carlsbad",
      },
      {
        title: "Daybreak Community Church",
        address: "6515 Ambrosia Ln",
        city: "Carlsbad",
      },
    ]

    return (
      <View
        style={{
          flex: 1,
          alignItems: "center",
          backgroundColor: "#fff",
        }}>
        <View
          style={{
            padding: 16,
            paddingBottom: 0,
            width: "100%",
          }}>
          <TextInput
            placeholder="Name of church"
            style={{
              color: "#878685",
              padding: 8,
              borderWidth: 1,
              borderColor: "#ddd",
              borderStyle: "solid",
              borderRadius: 3,
              marginBottom: 4,
            }}
            returnKeyType="search"
          />
          <TextInput
            placeholder="City, State or Zip Code"
            value={ locationPermission ? "Current location" : this.props.navigation.state.params.zip }
            style={{
              fontWeight: locationPermission ? "bold" : "normal",
              color: locationPermission ? "#007aff" : "#878685",
              padding: 8,
              borderWidth: 1,
              borderColor: "#ddd",
              borderStyle: "solid",
              borderRadius: 3,
            }}
            returnKeyType="search"
          />
        </View>
        <List
          containerStyle={{
            width: "100%"
          }}>
          {
            list.map((item, i) => (
              <ListItem
                key={i}
                title={item.title}
                subtitle={`${item.address}, ${item.city}`}
                style={{ borderBottomColor: "#000000" }}
                titleStyle={{ fontSize: 16, color: "#585756" }}
                subtitleStyle={{ fontSize: 14, fontWeight: "normal", color: "#878685" }}
              />
            ))
          }
        </List>
      </View>
    )
  }
}