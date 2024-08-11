import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const FolderScreen = ({ route }) => {
  const { folder } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{folder.name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default FolderScreen;
