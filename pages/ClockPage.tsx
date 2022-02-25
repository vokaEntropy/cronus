import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { colors } from '../constants';
import { getCurrentTime } from '../utils/TimerUtils';

const ClockPage = () => {
  const [time, setTime] = useState(getCurrentTime());

  useEffect(() => {
    setInterval(() => setTime(getCurrentTime), 1000);
  });

  return (
    <View style={styles.clockPageContainer}>
      <Text style={styles.icon}>🕘</Text>
      <Text style={styles.text}>{time}</Text>
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
  icon: {
    fontSize: 70,
    textAlign: 'center',
  },
  text: {
    paddingTop: 10,
    fontSize: 44,
    color: colors.white,
    textAlign: 'center',
  },
});

export default ClockPage;
