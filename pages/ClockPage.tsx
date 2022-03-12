import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { colors } from '../constants';
import { getCurrentTime, getCurrentDate } from '../helpers/TimerUtils';

const ClockPage = () => {
  const [time, setTime] = useState(getCurrentTime());
  const [date, setDate] = useState(getCurrentDate());

  useEffect(() => {
    setInterval(() => {
      setTime(getCurrentTime);
      setDate(getCurrentDate);
    }, 1000);
  });

  return (
    <View style={styles.clockPageContainer}>
      <Text style={styles.icon}>🕘</Text>
      <Text style={styles.text}>{time}</Text>
      <Text style={[styles.text, styles.small]}>{date}</Text>
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
  small: {
    fontSize: 30,
  },
});

export default ClockPage;
