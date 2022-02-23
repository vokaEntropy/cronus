import React from 'react';
import { StyleSheet, View, Text, GestureResponderEvent } from 'react-native';

import { msToHuman } from '../utils/TimerUtils';
import TimerButton from './TimerButton';
import { colors, separatorStyle } from '../constants';

type TimerType = {
  id: string;
  title: string;
  project: string;
  elapsed: number;
  isRunning: boolean;
  onEditPress: (event: GestureResponderEvent) => void;
  onRemovePress: (id: string) => void;
  onStartPress: (id: string) => void;
  onStopPress: (id: string) => void;
};

const Timer = ({
  id,
  title,
  project,
  elapsed,
  isRunning,
  onEditPress,
  onRemovePress,
  onStartPress,
  onStopPress,
}: TimerType) => {
  const elapsedString = msToHuman(elapsed);

  const handleRemovePress = () => onRemovePress(id);
  const handleStartPress = () => onStartPress(id);
  const handleStopPress = () => onStopPress(id);

  const renderActionButton = () => {
    if (isRunning) {
      return <TimerButton title="Stop" emoji="🛑" onPress={handleStopPress} />;
    }
    return <TimerButton title="Start" emoji="▶️" onPress={handleStartPress} />;
  };

  return (
    <View style={styles.timerContainer}>
      <Text style={[styles.timerText, styles.title]}>{title}</Text>
      <Text style={styles.timerText}>{project}</Text>
      <Text style={[styles.timerText, styles.elapsedTime]}>
        ⏱️ {elapsedString}
      </Text>
      <View style={styles.buttonGroup}>
        <TimerButton title="Edit" emoji="🖊️" onPress={onEditPress} />
        <TimerButton title="Remove" emoji="🗑️" onPress={handleRemovePress} />
      </View>
      {renderActionButton()}
    </View>
  );
};

const styles = StyleSheet.create({
  timerContainer: {
    ...separatorStyle,
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
