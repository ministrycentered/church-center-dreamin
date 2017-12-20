import React from "react";
import { Icon, List, ListItem } from 'react-native-elements';

import {
  StyleSheet,
  View,
  Text,
  Button,
  TextInput,
  Picker,
  ScrollView,
  FlatList,
  TouchableOpacity
} from "react-native";

// export class GiveScreen extends React.Component {
//   static navigationOptions = {
//     title: "Give"
//   };

//   render() {
//     const { navigate } = this.props.navigation;

//     return (
//       <View
//         style={{
//           flex: 1,
//           backgroundColor: "#fff",
//           alignItems: "center",
//           justifyContent: "center"
//         }}
//       >
//         <Text style={{ fontSize: 40, fontWeight: "bold" }}>Give</Text>

//         <Button title="Next" onPress={() => navigate("GiveDonation")} />
//       </View>
//     );
//   }
// }

export class GiveDonation extends React.Component {
  static navigationOptions = {
    title: "Online Giving"
  };

  render() {
    const { navigate } = this.props.navigation;

    const funds = this.props.screenProps.appState.givingFunds.data;

    return (
      <View
        style={{
          flex: 1,
          backgroundColor: "#fff",
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        <TextInput
          placeholder="$25"
          style={{
            fontSize: 72,
            marginTop: 32,
            marginBottom: 24,
            textAlign: "center",
            color: "#878685"
          }}
        />

        <ScrollView
          contentContainerStyle={{
            flex: 1,
            backgroundColor: "#fff",
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          <FlatList
            data={funds}
            renderItem={({ item }) => <Text>{item.attributes.name}</Text>}
          />
        </ScrollView>

        <TouchableOpacity
          style={{
            backgroundColor: "#6cc271",
            borderRadius: 8,
            paddingTop: 8,
            paddingRight: 12,
            paddingBottom: 8,
            paddingLeft: 12,
            marginBottom: 32,
            width: "80%"
          }}
          >
          <Button color="white" title="Next &rarr;" onPress={() => navigate("GiveMethod")} />
        </TouchableOpacity>
      </View>
    );
  }
}

export class GiveMethod extends React.Component {
  static navigationOptions = {
    title: "Online Giving"
  };

  render() {
    const { navigate } = this.props.navigation;

    const list = [
      {
        title: 'Visa ...0845',
        icon: 'credit-card'
      },
      {
        title: 'Mastercard ...0943',
        icon: 'credit-card'
      },
    ]

    return (
      <View
        style={{
          flex: 1,
          backgroundColor: "#fff",
          alignItems: "center",
          justifyContent: "flex-start"
        }}
      >
        <Text
          style={{
            color: "#878685",
            fontSize: 12,
            paddingTop: 48,
            paddingRight: 12,
            paddingLeft: 12,
          }}>PAYMENT METHOD
        </Text>

        <List
          containerStyle={{
            width: "100%"
          }}>
          {
            list.map((item, i) => (
              <ListItem
                key={i}
                title={item.title}
                leftIcon={{name: item.icon, color: "#878685"}}
                style={{ paddingLeft: 32, borderBottomColor: "#000000" }}
                onPress={() => navigate("GiveSummary")}
                titleStyle={{ fontSize: 16, color: "#878685" }}
              />
            ))
          }
        </List>
      </View>
    );
  }
}

export class GiveSummary extends React.Component {
  static navigationOptions = {
    title: "Online Giving"
  };

  render() {
    const { navigate } = this.props.navigation;

    return (
      <View
        style={{
          flex: 1,
          backgroundColor: "#fff",
          alignItems: "center",
          justifyContent: "flex-start"
        }}
      >
        <Text
          style={{
            color: "#878685",
            fontSize: 12,
            paddingTop: 48,
            paddingRight: 12,
            paddingBottom: 24,
            paddingLeft: 12,
          }}>SUMMARY
        </Text>

        <View
          style={{
            width: "80%",
            alignItems: "center",
          }}>
          <Text
            style={{
              color: "#878685",
              fontSize: 64,
              fontWeight: "bold",
            }}
          >$55
          </Text>
          <Text
            style={{
              color: "#878685",
              fontSize: 16,
              paddingBottom: 12
            }}
          >to General from Visa ...0854
          </Text>
        </View>

        <TouchableOpacity
          style={{
            backgroundColor: "#6cc271",
            borderRadius: 8,
            paddingTop: 8,
            paddingRight: 12,
            paddingBottom: 8,
            paddingLeft: 12,
            marginTop: "auto",
            marginBottom: 32,
            width: "80%"
          }}
          >
          <Button color="white" title="Complete Donation" onPress={() => navigate("GiveComplete")} />
        </TouchableOpacity>
      </View>
    );
  }
}

export class GiveComplete extends React.Component {
  static navigationOptions = {
    title: "Online Giving"
  };

  render() {
    const { navigate } = this.props.navigation;

    return (
      <View
        style={{
          flex: 1,
          backgroundColor: "#fff",
          alignItems: "center",
          justifyContent: "center"
        }}
      >
      <Icon
        name='check-circle'
        type='feather'
        color='#6cc271'
        size={72}
        />
      <Text
        style={{
          fontSize: 24,
          color: "#878685",
          textAlign: "center",
          paddingTop: 24
        }}
      >
        Woots! You gave. Thank you!!!
      </Text>

      </View>
    );
  }
}
