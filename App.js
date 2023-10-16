import logo from './logo.svg';
import './App.css';
import CounterFC from './CounterFC'
import UseStateDem from './UseStateDem';
import DigitalClock from './DigitalClock';
import BlogContextDemo from './BlogContexttDemo';
import React from 'react';
  const blogInfo={
    React:{
        post:"Learn useContextHooks",
        author:"Varun K"
    },
    NodeJS:{
      post:'Node Commands',
      author:'Veena M'
    }
  };
  export const BlogContext=React.createContext(blogInfo);
  export default function App(){
  return (
    <div className="App">
  <div>
    <h1>UseContext() Demo</h1>
    <BlogContext.Provider value={blogInfo}>
      <BlogContextDemo/>
    </BlogContext.Provider>
    </div>
  </div>
  );
}
