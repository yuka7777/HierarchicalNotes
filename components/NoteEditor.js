import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

const NoteEditor = ({ onSave }) => {
  const [content, setContent] = useState('');

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Enter your note..."
        value={content}
        onChangeText={setContent}
      />
      <Button title="Save Note" onPress={() => onSave(content)} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  input: {
    borderBottomColor: '#ddd',
    borderBottomWidth: 1,
    marginBottom: 10,
    fontSize: 18,
  },
});

export default NoteEditor;
