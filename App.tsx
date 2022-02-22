import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

import EditableTimer from './components/EditableTimer';
import ToggleableTimerForm from './components/ToggleableTimerForm';
import colors from './constant/colors';

const App = () => {
  return (
    <View style={styles.appContainer}>
      <StatusBar style="light" />

      <View style={styles.titleContainer}>
        <Text style={styles.title}>Timers</Text>
      </View>
      
      <ScrollView style={styles.timerList}>
        <ToggleableTimerForm isOpen={false} />
        <EditableTimer
          id="1"
          title="Mow the lawn"
          project="House Chores"
          elapsed="8986300"
        />
        <EditableTimer
          id="2"
          title="Bake squash"
          project="Kitchen Chores"
          elapsed="3890985"
          editFormOpen
        />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    backgroundColor: colors.dark,
  },
  titleContainer: {
    paddingTop: 35,
    paddingBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: colors.grey,
  },
  title: {
    color: colors.white,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  timerList: {
    paddingBottom: 15,
  },
});

export default App;
