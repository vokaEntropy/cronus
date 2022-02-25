import { v4 as uuidv4 } from 'uuid';

export const msToHuman = (ms: number) => {
  const seconds = Math.floor((ms / 1000) % 60);
  const minutes = Math.floor((ms / 1000 / 60) % 60);
  const hours = Math.floor(ms / 1000 / 60 / 60);

  const humanized = [
    pad(hours.toString(), 2),
    pad(minutes.toString(), 2),
    pad(seconds.toString(), 2),
  ].join(':');

  return humanized;
};

const pad = (numberString: string | number, size: number) => {
  let padded = String(numberString);

  while (padded.length < size) {
    padded = `0${padded}`;
  }

  return padded;
};

export const getCurrentTime = () => {
  const currentDate = new Date();

  const currentTime = [
    pad(currentDate.getHours(), 2),
    pad(currentDate.getMinutes(), 2),
    pad(currentDate.getSeconds(), 2),
  ].join(':');

  return currentTime;
};

export const getCurrentDate = () => {
  const currentDate = new Date();

  return ` ${currentDate.getDate()}/${currentDate.getMonth() + 1}/${currentDate.getFullYear()}`;
};

export type newTimerType = {
  id?: string | null;
  title?: string;
  project?: string;
};

export const newTimer = (attrs: newTimerType = {}) => {
  const timer = {
    title: attrs.title || 'Timer',
    project: attrs.project || 'Project',
    id: uuidv4(),
    elapsed: 0,
    isRunning: false,
  };

  return timer;
};
