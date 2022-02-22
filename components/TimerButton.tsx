import React from 'react';
import {
  ColorValue,
  GestureResponderEvent,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';

import borderStyle from '../constant/borderStyle';
import colors from '../constant/colors';

type TimerButtonType = {
  color: ColorValue | undefined;
  title: string;
  small?: boolean;
  onPress?: ((event: GestureResponderEvent) => void) | undefined;
};

const TimerButton = ({ color, title, small, onPress }: TimerButtonType) => (
  <TouchableOpacity style={[styles.button]} onPress={onPress}>
    <Text style={[styles.buttonText, small ? styles.small : styles.large]}>
      {title}
    </Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  button: {
    ...borderStyle,
    backgroundColor: colors.lightDark,
    marginTop: 10,
    minWidth: 100,
    minHeight: 30,
  },
  small: {
    fontSize: 14,
    padding: 5,
  },
  large: {
    fontSize: 16,
    padding: 10,
  },
  buttonText: {
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
