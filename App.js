import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Provider } from 'react-redux';
import { store } from './src/store';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Play from './src/components/Play/Play';
import LastSearch from './src/components/RecentSearches/RecentRearches'
const Stack = createStackNavigator();
export default function App() {
  return (
    <Provider store={store}>
      <View style={styles.header}>
        <Text style={styles.headerText}>SoundCloud Player</Text>
      </View>
      <View style={styles.container}>
      <NavigationContainer>
      <Stack.Navigator initialRouteName="Play"
       screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen
          name="Play"
          component={Play}
        
        />
       <Stack.Screen
          name="LastSearch"
          component={LastSearch}
         
        />
      </Stack.Navigator>
    </NavigationContainer>
      </View>
    
    </Provider>
  );
}
const styles = StyleSheet.create({
  header: {
    backgroundColor: '#ff7700 ',
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: { marginTop: 30, fontSize: 20, fontWeight: 'bold' },
  container: {
    flex: 1,
  },
});