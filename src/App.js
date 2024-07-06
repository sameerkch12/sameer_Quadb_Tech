// src/App.js

import React from 'react';
import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';
import { Container, Typography, Box } from '@mui/material';

const App = () => {
  return (
    <Container>
      <Box textAlign="center" my={4}>
        <h1>Sameer</h1>
        <Typography variant="h2">To-Do Application</Typography>
      </Box>
      <TaskInput />
      <TaskList />
    </Container>
  );
};

export default App;
