import React, { useState, useEffect } from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  KeyboardAvoidingView,
} from 'react-native';
import { v4 as uuidv4 } from 'uuid';

import EditableTimer from '../components/EditableTimer';
import ToggleableTimerForm from '../components/ToggleableTimerForm';
import { colors } from '../constants';
import { newTimer, newTimerType } from '../utils/TimerUtils';

type TimerType = {
  title: string;
  project: string;
  id: string;
  elapsed: number;
  isRunning: boolean;
};

const TimersPage = () => {
  const [timers, setTimers] = useState<TimerType[]>([
    {
      title: 'Bake squash',
      project: 'Kitchen Chores',
      id: uuidv4(),
      elapsed: 1273998,
      isRunning: false,
    },
  ]);
  const [intervalId, setIntervalId] = useState(0);

  useEffect(() => {
    const TIME_INTERVAL = 1000;

    const currentIntervalId = setInterval(() => {
      setTimers((timers) =>
        timers.map((timer) => {
          const { elapsed, isRunning } = timer;

          return {
            ...timer,
            elapsed: isRunning ? elapsed + TIME_INTERVAL : elapsed,
          };
        })
      );
    }, TIME_INTERVAL);

    setIntervalId(Number(currentIntervalId));

    return () => clearInterval(intervalId);
  }, []);

  const handleCreateFormSubmit = (timer: newTimerType) => {
    setTimers([newTimer(timer), ...timers]);
  };

  const handleFormSubmit = (attrs: newTimerType) => {
    setTimers(
      timers.map((timer) => {
        if (timer.id === attrs.id) {
          const { title, project } = attrs;

          return {
            ...timer,
            title,
            project,
          } as TimerType;
        }

        return timer;
      })
    );
  };

  const handleRemovePress = (timerId: string) =>
    setTimers(timers.filter((t) => t.id !== timerId));

  const toggleTimer = (timerId: string) => {
    setTimers((prevTimers) =>
      prevTimers.map((timer) => {
        const { id, isRunning } = timer;

        if (id === timerId) {
          return {
            ...timer,
            isRunning: !isRunning,
          };
        }

        return timer;
      })
    );
  };

  const renderEditableTimer = () => {
    if (timers.length) {
      return timers.map(({ title, project, id, elapsed, isRunning }) => (
        <EditableTimer
          key={id}
          id={id}
          title={title}
          project={project}
          elapsed={elapsed}
          isRunning={isRunning}
          onFormSubmit={handleFormSubmit}
          onRemovePress={handleRemovePress}
          onStartPress={toggleTimer}
          onStopPress={toggleTimer}
        />
      ));
    }
    return <Text style={[styles.text]}>There are no timers</Text>;
  };

  return (
    <KeyboardAvoidingView behavior="height" style={styles.timerPageContainer}>
      <ScrollView style={styles.timerList}>
        <ToggleableTimerForm onFormSubmit={handleCreateFormSubmit} />
        {renderEditableTimer()}
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  timerPageContainer: {
    flex: 1,
    backgroundColor: colors.dark,
  },
  text: {
    paddingTop: 10,
    fontSize: 16,
    color: colors.white,
    textAlign: 'center',
  },
  timerList: {
    paddingBottom: 15,
  },
});

export default TimersPage;
