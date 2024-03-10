import { Routes, Route, Navigate } from 'react-router-dom';
import { Fragment } from 'react';

import './App.css';

import Home from './routes/home/home';
import Navigation from './routes/navigation/navigation';
import BookDetailsPage from './components/book-detail/book-detail';
import Footer from './components/footer/footer';

import books from './components/directory/books';


function App() {
  return (
    <div>
      <Fragment>
        <Navigation/>
        <Routes>
          <Route path='/' element={<Navigation />} />
          <Route index element={<Home/>} />
          <Route path="/book/:index" element={<BookDetailsPage books={books}/>} />
        </Routes>
        <Footer />
      </Fragment>
    </div>
  );
}

export default App;
