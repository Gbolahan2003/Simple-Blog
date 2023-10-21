import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import InputContainer from './Input/InputContainer';
import BlogContainer from './Blog-details/BlogContainer';

import {AnimatePresence} from 'framer-motion'
import BlogPage from './BlogPage/BlogPage';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import UpdateInputContainer from './UpdateInput/UpdateInput';
function App() {
  const blog = useSelector((state: any) => state.blog);
  console.log(blog);
  
  return (
<AnimatePresence mode='wait'>
<div className="App">

<Routes>
  <Route path={'/'} element={<BlogContainer/>}/>
  <Route path='create-blog' element={<InputContainer />}/>
  <Route path='create-blog/blog/:id' element={<BlogPage blogDetail={blog}/>}/>
  <Route path='update-blog/:id' element={<UpdateInputContainer/>}/>
</Routes>
    </div>

</AnimatePresence>
  );
}

export default App;
