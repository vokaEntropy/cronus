import React from 'react';

import TimerForm from './TimerForm';
import Timer from './Timer';

type EditableTimerType = {
  id: string;
  title: string;
  project: string;
  elapsed: number;
  isRunning?: boolean;
  editFormOpen?: boolean;
};

// add id and isRunning for Timer

const EditableTimer = ({
  id,
  title,
  project,
  elapsed,
  isRunning,
  editFormOpen,
}: EditableTimerType) => {
  if (editFormOpen) {
    return <TimerForm id={id} title={title} project={project} />;
  }
  return <Timer title={title} project={project} elapsed={elapsed} />;
};

export default EditableTimer;
