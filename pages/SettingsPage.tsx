import React, { useState } from 'react';
import { View, Switch, Text, StyleSheet } from 'react-native';

import { colors } from '../constants';

const SettingsPage = () => {
  const [isTimerOption, setIsTimerOption] = useState(true);

  const handleIsTimerOptionSwitch = () => {
    setIsTimerOption(!isTimerOption);
  };

  return (
    <View style={styles.settingsPageContainer}>
      <View style={styles.optionContainer}>
        <Text style={styles.optionText}>
          When creating a timer, immediately start it
        </Text>

        <Switch
          value={isTimerOption}
          onChange={handleIsTimerOptionSwitch}
          {...SwitchStyle}
        />
      </View>
    </View>
  );
};

const SwitchStyle = {
  thumbColor: colors.white,
  trackColor: {
    true: colors.whiteOpacity,
    false: colors.lightDark,
  },
};

const styles = StyleSheet.create({
  settingsPageContainer: {
    flex: 1,
    backgroundColor: colors.dark,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  optionContainer: {
    width: '100%',
    paddingTop: 15,
    paddingLeft: 15,
    paddingRight: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  optionText: {
    fontSize: 16,
    color: colors.white,
    width: '70%',
  },
});

export default SettingsPage;
