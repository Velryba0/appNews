import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Provider } from "react-redux";
import { configureStore } from "./redux/configureStore";

import NewsTopheadline from './components/newsTopHeadline/newsTopHeadline';

export default function App() {

  return (
    <Provider store={configureStore()}>
      <NewsTopheadline/>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
