import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Note = ({ note }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{note.content}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 5,
    marginVertical: 5,
  },
  text: {
    fontSize: 16,
  },
});

export default Note;
