import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Sidebar = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Sidebar</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: '#f4f4f4',
  },
  text: {
    fontSize: 18,
  },
});

export default Sidebar;
