import React from 'react';
import  './App.css';
import PostsContainer from "./components/posts/PostsContainer";
import HeaderContainer from "./components/header/HeaderContainer";

const App = () => {
  return (
      <div className='app'>
          <HeaderContainer />
          <div className='container'>
              <PostsContainer />
          </div>
      </div>
  );
}

export default App;