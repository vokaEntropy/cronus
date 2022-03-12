import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';

import TimerButton from './TimerButton';
import TimerForm from './TimerForm';
import { newTimerType } from '../helpers/TimerUtils';

type ToggleableTimerFormType = {
  onFormSubmit: (timer: newTimerType) => void;
};

const ToggleableTimerForm = ({ onFormSubmit }: ToggleableTimerFormType) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleFormOpen = () => setIsOpen(true);
  const handleFormClose = () => setIsOpen(false);
  const handleFormSubmit = (timer: newTimerType) => {
    onFormSubmit(timer);
    handleFormClose();
  };

  return (
    <View style={[styles.container, !isOpen && styles.buttonPadding]}>
      {isOpen ? (
        <TimerForm
          onFormSubmit={handleFormSubmit}
          onFormClose={handleFormClose}
        />
      ) : (
        <TimerButton title="Add" emoji="⏱️" onPress={handleFormOpen} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
  },
  buttonPadding: {
    paddingHorizontal: 15,
  },
});

export default ToggleableTimerForm;
