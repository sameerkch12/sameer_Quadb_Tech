// src/components/Task.js

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteTask, editTask } from '../redux/actions';
import { ListItem, ListItemText, IconButton, TextField, Box } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import SaveIcon from '@mui/icons-material/Save';

const Task = ({ task, index }) => {
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);
  const [newTask, setNewTask] = useState(task);

  // Function to handle editing a task
  const handleEditTask = () => {
    dispatch(editTask(index, newTask)); // Dispatch the editTask action
    setIsEditing(false); // Exit edit mode
  };

  return (
    <ListItem>
      {isEditing ? (                                                                                  
        <TextField
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && handleEditTask()}
          fullWidth
        />
      ) : (
        <ListItemText primary={task} />
      )}
      <Box display="flex" alignItems="center">
        <IconButton onClick={() => dispatch(deleteTask(index))}>
          <DeleteIcon />
        </IconButton>
        <IconButton onClick={() => setIsEditing(!isEditing)}>
          {isEditing ? <SaveIcon onClick={handleEditTask} /> : <EditIcon />}
        </IconButton>
      </Box>
    </ListItem>
  );
};

export default Task;
