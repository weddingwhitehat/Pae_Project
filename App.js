import React from "react";
import { AppLoading } from "expo";
import { Container, Text } from "native-base";
import * as Font from "expo-font";
import { Ionicons } from "@expo/vector-icons";
import { NativeRouter, Route, Switch } from "react-router-native";
import Home from "./app/components/Home";
import Bun from "./app/components/Bun";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isReady: false
    };
  }

  async componentDidMount() {
    await Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
      ...Ionicons.font
    });
    this.setState({ isReady: true });
  }

  render() {
    if (!this.state.isReady) {
      return <AppLoading />;
    }

    return (
      <NativeRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route  path="/bun" component={Bun} />
        </Switch>
      </NativeRouter>
    );
  }
}
