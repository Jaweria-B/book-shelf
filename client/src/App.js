import { Routes, Route, Navigate } from 'react-router-dom';
import { Fragment } from 'react';

import './App.css';

import Home from './routes/home/home';
import Navigation from './routes/navigation/navigation';

function App() {
  return (
    <div>
      <Fragment>
        <Navigation/>
        <Routes>
          <Route path='/' element={<Navigation />} />
          <Route index element={<Home/>} />
        </Routes>
      </Fragment>
    </div>
  );
}

export default App;
