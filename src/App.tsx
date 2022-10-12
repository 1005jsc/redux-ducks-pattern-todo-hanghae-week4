import React from 'react';
import logo from './logo.svg';
import './App.css';
import TodoPage from './pages/TodoPage';
import { Route, Routes } from 'react-router-dom';
import TodoList from './pages/TodoList';
import NotFound from './components/NotFound';

function App() {
  return (
    <Routes>
      <Route path='' element={<TodoList />} />

      <Route path='/detail' element={<TodoPage />} />
      <Route path='/detail:id' element={<TodoPage />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
  );
}

export default App;
