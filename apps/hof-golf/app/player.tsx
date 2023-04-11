import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet } from 'react-native';
import Player from '../components/Player';
import { Text, View } from '../components/Themed';

const seasons = require('../data/sizemgr01.json');

export default function TeamScreen() {
  return (
    <View style={styles.container}>
      <Player seasons={seasons} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});