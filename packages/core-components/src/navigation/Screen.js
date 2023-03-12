import { View, Text } from "react-native";
import Navbar from './Navbar';

export default function Screen({ title, children }) {
  return (
    <View style={{ flex: 1 }}>
      <Navbar title={title} />
      {children}
    </View>
  );
}