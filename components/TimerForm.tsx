import React from 'react';
import { StyleSheet, View, Text, TextInput } from 'react-native';

import TimerButton from './TimerButton';
import borderStyle from '../constant/borderStyle';
import colors from '../constant/colors';

type TimerFormType = {
  id?: string;
  title?: string;
  project?: string;
};

const TimerForm = ({ id, title, project }: TimerFormType) => {
  const submitText = Boolean(id) ? '🔃 Update' : '➕ Create';

  return (
    <View style={styles.formContainer}>
      <View style={styles.attributeContainer}>
        <Text style={styles.textInputTitle}>Title</Text>
        <View style={styles.textInputContainer}>
          <TextInput
            style={styles.textInput}
            underlineColorAndroid="transparent"
            defaultValue={title}
          />
        </View>
      </View>

      <View style={styles.attributeContainer}>
        <Text style={styles.textInputTitle}>Project</Text>
        <View style={styles.textInputContainer}>
          <TextInput
            style={styles.textInput}
            underlineColorAndroid="transparent"
            defaultValue={project}
          />
        </View>
      </View>

      <View style={styles.buttonGroup}>
        <TimerButton small color="#21BA45" title={submitText} />
        <TimerButton small color="#DB2828" title="❌ Cancel" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  formContainer: {
    ...borderStyle,
    padding: 15,
    margin: 15,
    marginBottom: 0,
  },
  attributeContainer: {
    marginVertical: 8,
  },
  textInputContainer: {
    ...borderStyle,
    borderWidth: 1,
    marginBottom: 5,
  },
  textInput: {
    ...borderStyle,
    color: colors.white,
    backgroundColor: colors.lightDark,
    height: 30,
    padding: 5,
    fontSize: 12,
    paddingLeft: 10,
  },
  textInputTitle: {
    color: colors.white,
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  buttonGroup: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default TimerForm;
