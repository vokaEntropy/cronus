import React, { useState } from 'react';
import { StyleSheet, View, GestureResponderEvent } from 'react-native';

import TimerButton from './TimerButton';
import TimerInput from './TimerInput';
import { newTimerType } from '../utils/TimerUtils';
import { separatorStyle } from '../constants';

type TimerFormType = {
  onFormClose: (event: GestureResponderEvent) => void;
  onFormSubmit: (timer: newTimerType) => void;
  id?: string | null;
  defaultTitle?: string;
  defaultProject?: string;
};

const TimerForm = ({
  id = null,
  onFormClose,
  onFormSubmit,
  defaultTitle = '',
  defaultProject = '',
}: TimerFormType) => {
  const submitText = Boolean(id)
    ? { title: 'Update', emoji: '🔃' }
    : { title: 'Create', emoji: '⏱️' };

  const [title, setTitle] = useState(id ? defaultTitle : '');
  const [project, setProject] = useState(id ? defaultProject : '');

  const handleSubmit = () =>
    onFormSubmit({
      id,
      title,
      project,
    });

  return (
    <View style={styles.formContainer}>
      <TimerInput title="Title:" value={title} onChangeText={setTitle} />
      <TimerInput title="Project:" value={project} onChangeText={setProject} />

      <View style={styles.buttonGroup}>
        <TimerButton {...submitText} onPress={handleSubmit} />
        <TimerButton title="Cancel" emoji="❌" onPress={onFormClose} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  formContainer: {
    ...separatorStyle,
    padding: 15,
    margin: 15,
    marginBottom: 0,
  },
  buttonGroup: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default TimerForm;
