import React from "react";

import {
  StyleSheet,
  View,
  Text,
  Button,
  TextInput,
  Picker
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

    return (
      <View
        style={{
          flex: 1,
          backgroundColor: "#fff",
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        <Text style={{ fontSize: 40, fontWeight: "bold" }}>Donation</Text>

        <Button title="Next" onPress={() => navigate("GiveMethod")} />
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

    return (
      <View
        style={{
          flex: 1,
          backgroundColor: "#fff",
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        <Text style={{ fontSize: 40, fontWeight: "bold" }}>Payment Method</Text>

        <Button title="Next" onPress={() => navigate("GiveSummary")} />
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
          justifyContent: "center"
        }}
      >
        <Text style={{ fontSize: 40, fontWeight: "bold" }}>Summary</Text>

        <Button title="Next" onPress={() => navigate("GiveComplete")} />
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
        <Text style={{ fontSize: 40, fontWeight: "bold" }}>Complete</Text>

        <Button title="Next" onPress={() => navigate("Give")} />
      </View>
    );
  }
}
