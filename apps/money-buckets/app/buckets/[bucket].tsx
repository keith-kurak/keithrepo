import { StatusBar } from "expo-status-bar";
import { Platform, StyleSheet, ScrollView, Pressable } from "react-native";
import { useSearchParams, Stack } from "expo-router";
import { observer } from "mobx-react-lite";

import { Text, View } from "../../components/Themed";

import { useStores } from "../../stores";

function Entry({ entry }) {
  return (
    <View style={{ flexDirection: "row" }}>
      <Text>{entry.value}</Text>
      <Text>{entry.description}</Text>
    </View>
  );
}

export default observer(function BucketScreen() {
  const { bucket } = useSearchParams();
  const { bucketsStore } = useStores();

  const myBucket = bucketsStore.buckets.find((b) => b.name === bucket);

  return (
    <View style={styles.container}>
      <Stack.Screen options={{ title: `${bucket}` }} />
      <ScrollView>
        {myBucket.entries.map((entry, index) => (
          <Entry key={index.toString()} entry={entry} />
        ))}
      </ScrollView>
      <Pressable onPress={() => myBucket.addEntry({ value: 17, description: "blah" })}>
        <Text>Add entry</Text>
      </Pressable>
      <StatusBar style={Platform.OS === "ios" ? "light" : "auto"} />
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 50,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
