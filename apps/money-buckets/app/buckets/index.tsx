import { StatusBar } from "expo-status-bar";
import { Platform, StyleSheet, ScrollView, Pressable } from "react-native";
import { Link, Stack } from "expo-router";
import { observer } from "mobx-react-lite"

import EditScreenInfo from "../../components/EditScreenInfo";
import { Text, View } from "../../components/Themed";

import { useStores } from "../../stores";

function Bucket({ bucket }) {
  return (
    <Link href={`/buckets/${bucket.name}`}>
      <View>
        <Text>{bucket.name}</Text>
      </View>
    </Link>
  );
}

export default observer(function BucketsScreen() {
  const { bucketsStore } = useStores();
  return (
    <View style={styles.container}>
      <Stack.Screen options={{ title: "Buckets" }} />
      <ScrollView>
        {bucketsStore.buckets.map((bucket) => (
          <Bucket key={bucket.name} bucket={bucket} />
        ))}
      </ScrollView>
      <Pressable
        onPress={() => bucketsStore.addBucket(`bucket #${bucketsStore.buckets.length + 1}`)}>
        <Text>Add bucket</Text>
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
