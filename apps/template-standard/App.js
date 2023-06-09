import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { MyView } from 'core-components';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app! 3</Text>
      <StatusBar style="auto" />
      <MyView />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
