import React from 'react';
import { StyleSheet, View, Text, TextInput } from 'react-native';

import { borderStyle, colors, sizes } from '../constants';

type TimerInputType = {
  value: string;
  title: string;
  defaultValue?: string;
  onChangeText?: ((text: string) => void) | undefined;
};

const TimerInput = ({
  defaultValue = '',
  title,
  value,
  onChangeText,
}: TimerInputType) => (
  <View style={styles.attributeContainer}>
    <Text style={styles.textInputTitle}>{title}</Text>
    <View style={styles.textInputContainer}>
      <TextInput
        value={value}
        onChangeText={onChangeText}
        defaultValue={defaultValue}
        style={styles.textInput}
        underlineColorAndroid="transparent"
      />
    </View>
  </View>
);

const styles = StyleSheet.create({
  attributeContainer: {
    marginVertical: 8,
  },
  textInputContainer: {
    ...borderStyle,
    marginBottom: 5,
  },
  textInput: {
    ...borderStyle,
    color: colors.white,
    backgroundColor: colors.lightDark,
    fontSize: 12,
    justifyContent: 'center',
    height: sizes.height,
    paddingLeft: 10,
  },
  textInputTitle: {
    color: colors.white,
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 5,
  },
});

export default TimerInput;
