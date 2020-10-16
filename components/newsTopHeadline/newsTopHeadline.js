import React, { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";

import { useDispatch, useSelector } from "react-redux";
import { createSelector } from "reselect";
import { requestTopHeadlinesData } from "../../redux/ducks/topHeadlines";
const NewsTopHeadline = () => {
  const dispatch = useDispatch();

  const articlesSelector = createSelector(
    (state) => state.topHeadlines.articles,
    (article) => article
  );

  const allDataSelector = createSelector(
    articlesSelector,
    (articlesSelector) => articlesSelector
  );

  const allTopheadlineData = useSelector((state) => allDataSelector(state));
  console.log(allTopheadlineData);

  useEffect(() => {
    dispatch(requestTopHeadlinesData());
  }, []);

  return (
    <View style={styles.container}>
      <Text>En construcción!!!</Text>
    </View>
  );
};

export default NewsTopHeadline;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
