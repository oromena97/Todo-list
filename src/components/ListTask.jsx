import React from 'react';
import { useSelector } from 'react-redux';
import Task from './Task';

const ListTask = ({ filter }) => {
  const tasks = useSelector((state) => state.tasks);

  const filteredTasks = filter === 'done'
    ? tasks.filter((task) => task.isDone)
    : filter === 'notDone'
    ? tasks.filter((task) => !task.isDone)
    : tasks;

  return (
    <div>
      {filteredTasks.map((task) => (
        <Task key={task.id} task={task} />
      ))}
    </div>
  );
};

export default ListTask;