// src/components/TaskInput.js

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../redux/actions';
import { TextField, Button, Container, Box } from '@mui/material';

const TaskInput = () => {
  const [task, setTask] = useState('');
  const dispatch = useDispatch();

  // Function to handle adding a new task
  const handleAddTask = () => {
    if (task.trim()) {
      dispatch(addTask(task)); // Dispatch the addTask action
      setTask(''); // Clear the input field
    }
  };

  return (
    <Container>
      <Box display="flex" justifyContent="center" mt={2}>
        <TextField
          label="New Task"
          variant="outlined"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && handleAddTask()}
          fullWidth
        />
        <Button
          variant="contained"
          color="primary"
          onClick={handleAddTask}
          style={{ marginLeft: 8 }}
        >
          Add Task
        </Button>
      </Box>
    </Container>
  );
};

export default TaskInput;
