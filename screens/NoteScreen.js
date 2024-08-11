import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const NoteScreen = ({ route }) => {
  const { note } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{note.content}</Text>
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
  },
});

export default NoteScreen;
