import React, { useState } from 'react';

import TimerForm from './TimerForm';
import Timer from './Timer';

type EditableTimerType = {
  id: string;
  title: string;
  project: string;
  elapsed: number;
  isRunning?: boolean;
};

// add id and isRunning for Timer

const EditableTimer = ({
  id,
  title,
  project,
  elapsed,
  isRunning,
}: EditableTimerType) => {
  const [editFormOpen, setEditFormOpen] = useState(false);

  if (editFormOpen) {
    return <TimerForm id={id} defaultTitle={title} defaultProject={project} />;
  }
  return <Timer title={title} project={project} elapsed={elapsed} />;
};

export default EditableTimer;
