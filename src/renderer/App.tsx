/*
 * @Author: Rem
 * @Date: 2024-05-20 16:54:44
 * @LastEditors: Rem
 * @LastEditTime: 2024-05-20 17:19:27
 * @FilePath: /weight-ui/src/renderer/App.tsx
 * @FileDescription:
 * @Description:
 * Do one thing at a time, and do well.
 * Copyright (c) 2024 by Rem, All Rights Reserved.
 */
import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import 'tailwindcss/tailwind.css';
import './App.css';

function Main() {
  return (
    <div>
      <h1 className="text-4xl text-center">Hello, Electron!</h1>
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
