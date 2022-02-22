import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

import { msToHuman } from '../utils/TimerUtils';
import TimerButton from './TimerButton';
import borderStyle from '../constant/borderStyle';
import colors from '../constant/colors';

type TimerType = {
  title: string;
  project: string;
  elapsed: number;
};

const Timer = ({ title, project, elapsed }: TimerType) => {
  const elapsedString = msToHuman(elapsed);

  return (
    <View style={styles.timerContainer}>
      <Text style={[styles.timerText, styles.title]}>{title}</Text>
      <Text style={styles.timerText}>{project}</Text>
      <Text style={[styles.timerText, styles.elapsedTime]}>
        ⏱️ {elapsedString}
      </Text>
      <View style={styles.buttonGroup}>
        <TimerButton color="blue" small title="🖊️ Edit" />
        <TimerButton color="blue" small title="🗑️ Remove" />
      </View>
      <TimerButton color="#21BA45" title="▶️ Start" />
    </View>
  );
};

const styles = StyleSheet.create({
  timerContainer: {
    ...borderStyle,
    padding: 15,
    margin: 15,
    marginBottom: 0,
  },
  timerText: {
    color: colors.white,
  },
  title: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  elapsedTime: {
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingVertical: 15,
  },
  buttonGroup: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default Timer;
