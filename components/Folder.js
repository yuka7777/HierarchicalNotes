import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const Folder = ({ folder, onPress }) => {
  return (
    <TouchableOpacity onPress={() => onPress(folder)}>
      <View style={styles.container}>
        <Text style={styles.text}>{folder.name}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: '#eee',
    borderRadius: 5,
    marginVertical: 5,
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default Folder;
