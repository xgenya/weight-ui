/*
 * @Author: Rem
 * @Date: 2024-05-20 16:54:44
 * @LastEditors: Rem
 * @LastEditTime: 2024-05-22 19:04:36
 * @FilePath: /weight-ui/src/renderer/App.tsx
 * @FileDescription: App.tsx
 * @Description:  Main entry file
 * Do one thing at a time, and do well.
 * Copyright (c) 2024 by Rem, All Rights Reserved.
 */
import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import 'tailwindcss/tailwind.css';
import './App.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import { Button } from '@mui/material';

function handleClick() {
  console.log('Hello World');
}

function Main() {
  return (
    <div className="flex flex-col items-center justify-center h-screen space-y-4">
      <h1 className="text-4xl text-center">Hello, Electron!</h1>
      <Button variant="contained" onClick={handleClick}>
        Hello World
      </Button>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
    </Router>
  );
}
