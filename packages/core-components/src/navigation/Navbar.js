import { View, Text, StyleSheet } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function Navbar({ title }) {
  const insets = useSafeAreaInsets();
  return (
    <View
      style={{
        paddingTop: insets.top,
        height: 46 + insets.top,
        justifyContent: "center",
        alignItems: "center",
        borderBottomColor: 'black',
        borderBottomWidth: StyleSheet.hairlineWidth,
      }}>
      <Text style={{ fontSize: 20 }}>{title}</Text>
    </View>
  );
}
