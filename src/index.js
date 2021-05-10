import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import PostList from "./components/PostList";


ReactDOM.render(
  <React.StrictMode>
      <div className="header">
          <h2>Haphaestus</h2>
      </div>
      <PostList/>
      <div className="newPost"><h3>Make New Post</h3></div>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
