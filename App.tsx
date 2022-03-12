import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {
  BottomTabNavigationOptions,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';

import { colors } from './constants';
import { ClockPage, TimersPage, SettingsPage } from './pages';

const { Navigator, Screen } = createBottomTabNavigator();

const App = () => {
  const [isTimerOption, setIsTimerOption] = useState(false);

  const toggleIsTimerOption = () => {
    setIsTimerOption(!isTimerOption);
  };

  return (
    <View style={styles.appContainer}>
      <StatusBar style="light" />

      <NavigationContainer>
        <Navigator screenOptions={screenStyles as BottomTabNavigationOptions}>
          <Screen
            name="Clock"
            children={() => <ClockPage />}
            options={{ tabBarIcon: () => <Text style={styles.text}>🕘</Text> }}
          />
          <Screen
            name="Timers"
            children={() => <TimersPage isTimerOption={isTimerOption} />}
            options={{ tabBarIcon: () => <Text style={styles.text}>⏱️</Text> }}
          />
          <Screen
            name="Settings"
            children={() => (
              <SettingsPage
                isTimerOption={isTimerOption}
                toggleIsTimerOption={toggleIsTimerOption}
              />
            )}
            options={{ tabBarIcon: () => <Text style={styles.text}>⚙️</Text> }}
          />
        </Navigator>
      </NavigationContainer>
    </View>
  );
};

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
