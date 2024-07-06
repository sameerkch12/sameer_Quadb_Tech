// src/components/TaskList.js

import React from 'react';
import { useSelector } from 'react-redux';
import { List, Container } from '@mui/material';
import Task from './Task';

const TaskList = () => {
  const tasks = useSelector((state) => state.tasks); // Select tasks from the Redux state

  return (
    <Container>
      <List>
        {tasks.map((task, index) => (
          <Task key={index} task={task} index={index} />
        ))}
      </List>
    </Container>
  );
};

export default TaskList;
