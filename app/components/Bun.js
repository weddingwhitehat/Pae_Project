import React, { Component } from "react";
import { Text, StyleSheet, Button, TextInput, View } from "react-native";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#00f",
    alignContent: "center",
    alignItems: "center",
    justifyContent: "center",
    flex: 1
  },
  myButton: {
    marginBottom: 30,
    width: 260,
    alignItems: "center",
    backgroundColor: "#2196F3"
  }
});

class Bun extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: {
        name: ""
      }
    };
  }
  render() {
    return (
      <View>
        <View style={styles.container}>
          <Text style={{ color: "#fff", fontSize: 22 }}>Hay Guyz</Text>
          <Button
            onPress={() => {
              this.props.history.push("/");
            }}
            title="back"
          />
        </View>

        <View style={{ paddingTop: 50, padding: 10 }}>
          <TextInput
            style={{ height: 40 }}
            placeholder="พิมพ์ดิสัส"
            onChangeText={text => this.setState({ input: { name: text } })}
            value={this.state.input.name}
          />
          <Button
            style={{
              color: "red"
            }}
            onPress={() => {
              alert = "get closer";
            }}
            title="Click Me"
          />
        </View>
      </View>
    );
  }
}

export default Bun;
