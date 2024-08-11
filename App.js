// import React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import AppNavigator from './navigation/AppNavigator';

// export default function App() {
//   return (
//     <NavigationContainer>
//       <AppNavigator />
//     </NavigationContainer>
//   );
// }
// import React from 'react';
// import { View, Text, StyleSheet } from 'react-native';

// const App = () => {
//   return (
//     <View style={styles.container}>
//       <Text style={styles.text}>Welcome to the Hierarchical Notes App!</Text>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   text: {
//     fontSize: 20,
//     fontWeight: 'bold',
//   },
// });

// export default App;
import React from 'react';
import AppNavigator from './navigation/AppNavigator';

export default function App() {
  return <AppNavigator />;
}
