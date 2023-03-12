import { Text, View, FlatList } from "react-native";
import { Link } from "expo-router";
import { Screen } from "core-components";

export default function Chords() {
  const renderItem = ({ item }) => {
    return (
      <View style={{ padding: 20 }}>
        <Link href={`chords/${item}`}>{`Chord #${item}`}</Link>
      </View>
    );
  };
  return (
    <Screen title="Chords">
      <FlatList renderItem={renderItem} data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]} />
    </Screen>
  );
}
