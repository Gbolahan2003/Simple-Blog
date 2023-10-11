import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import InputContainer from './Input/InputContainer';
import BlogContainer from './Blog-details/BlogContainer';
import { Provider } from 'react-redux/es/exports';
import store from './Redux/store/store';
import {AnimatePresence} from 'framer-motion'
import BlogPage from './BlogPage/BlogPage';
function App() {
  return (
   
<AnimatePresence mode='wait'>
<div className="App">

<Routes>
  <Route path={'/'} element={<BlogContainer/>}/>
  <Route path='create-blog' element={<InputContainer/>}/>
  <Route path='blog' element={<BlogPage/>}/>
</Routes>
    </div>

</AnimatePresence>
  );
}

export default App;
