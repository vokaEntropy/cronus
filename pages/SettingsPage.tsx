import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { colors } from '../constants';

const SettingsPage = () => {
  return (
    <View style={styles.clockPageContainer}>
      <Text style={styles.text}>Soon...</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  clockPageContainer: {
    flex: 1,
    backgroundColor: colors.dark,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    paddingTop: 10,
    fontSize: 44,
    color: colors.white,
    textAlign: 'center',
  },
});

export default SettingsPage;
