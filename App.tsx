import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {
  BottomTabNavigationOptions,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';

import { colors } from './constants';
import { ClockPage, TimersPage, SettingsPage } from './pages';
import { StoreProvider } from './components/StoreContext';

const { Navigator, Screen } = createBottomTabNavigator();

const App = () => (
  <StoreProvider>
    <View style={styles.appContainer}>
      <StatusBar style="light" />

      <NavigationContainer>
        <Navigator screenOptions={screenStyles as BottomTabNavigationOptions}>
          <Screen
            name="Clock"
            component={ClockPage}
            options={{
              tabBarIcon: () => <Text style={styles.text}>🕘</Text>,
            }}
          />
          <Screen
            name="Timers"
            component={TimersPage}
            options={{
              tabBarIcon: () => <Text style={styles.text}>⏱️</Text>,
            }}
          />
          <Screen
            name="Settings"
            component={SettingsPage}
            options={{
              tabBarIcon: () => <Text style={styles.text}>⚙️</Text>,
            }}
          />
        </Navigator>
      </NavigationContainer>
    </View>
  </StoreProvider>
);

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
  },
  text: {
    color: colors.white,
    fontSize: 18,
  },
});

const screenStyles = {
  tabBarInactiveBackgroundColor: colors.lightDark,
  tabBarActiveBackgroundColor: colors.dark,
  tabBarActiveTintColor: colors.white,
  tabBarInactiveTintColor: colors.whiteOpacity,
  headerTitleAlign: 'center',
  headerStyle: {
    backgroundColor: colors.lightDark,
  },
  headerTitleStyle: {
    color: colors.white,
  },
};

export default App;
