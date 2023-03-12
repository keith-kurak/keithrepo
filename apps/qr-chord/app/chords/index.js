import { Text, View, FlatList } from "react-native";
import { Link } from "expo-router";

export default function Chords() {
  const renderItem = ({ item }) => {
    return (
      <View style={{ padding: 20 }}>
        <Link href={`chords/${item}`}>{`Chord #${item}`}</Link>
      </View>
    );
  };
  return (
    <View style={{ flex: 1 }}>
      <FlatList renderItem={renderItem} data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]} />
    </View>
  );
}
