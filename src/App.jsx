import { useState } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import TodoList from './TodoList';
import Navbar from './Navbar';

function App() {
  return (
    <>
      <CssBaseline />
      <Navbar />

      <TodoList />
    </>
  );
}

export default App;
