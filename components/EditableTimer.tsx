import React, { useState } from 'react';

import TimerForm from './TimerForm';
import Timer from './Timer';
import { newTimerType } from '../utils/TimerUtils';

type EditableTimerType = {
  id: string;
  title: string;
  project: string;
  elapsed: number;
  isRunning: boolean;
  onFormSubmit: (timer: newTimerType) => void;
  onRemovePress: (timerId: string) => void;
  onStartPress: (timerId: string) => void;
  onStopPress: (timerId: string) => void;
};

const EditableTimer = ({
  id,
  title,
  project,
  elapsed,
  isRunning,
  onFormSubmit,
  onRemovePress,
  onStartPress,
  onStopPress,
}: EditableTimerType) => {
  const [editFormOpen, setEditFormOpen] = useState(false);

  const closeForm = () => setEditFormOpen(false);
  const openForm = () => setEditFormOpen(true);
  const handleSubmit = (timer: newTimerType) => {
    onFormSubmit(timer);
    closeForm();
  };

  if (editFormOpen) {
    return (
      <TimerForm
        id={id}
        defaultTitle={title}
        defaultProject={project}
        onFormSubmit={handleSubmit}
        onFormClose={closeForm}
      />
    );
  }
  return (
    <Timer
      id={id}
      isRunning={isRunning}
      title={title}
      project={project}
      elapsed={elapsed}
      onEditPress={openForm}
      onRemovePress={onRemovePress}
      onStartPress={onStartPress}
      onStopPress={onStopPress}
    />
  );
};

export default EditableTimer;
