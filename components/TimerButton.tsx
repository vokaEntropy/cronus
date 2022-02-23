import React from 'react';
import {
  GestureResponderEvent,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';

import { borderStyle, colors, sizes } from '../constants';

type TimerButtonType = {
  title: string;
  emoji: string;
  onPress: (event: GestureResponderEvent) => void;
};

const TimerButton = ({ title, emoji, onPress }: TimerButtonType) => (
  <TouchableOpacity style={[styles.button]} onPress={onPress}>
    <Text>{emoji}</Text>
    <Text style={[styles.buttonText]}>{title}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  button: {
    ...borderStyle,
    backgroundColor: colors.lightDark,
    minHeight: sizes.height,
    marginTop: 10,
    paddingLeft: 14,
    paddingRight: 14,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    marginLeft: 6,
    color: colors.white,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  title: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  elapsedTime: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingVertical: 10,
  },
});

export default TimerButton;
