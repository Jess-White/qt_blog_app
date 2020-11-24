import './App.css';
import React, { Component } from 'react';
import Header from './Components/Header';
import Footer from './Components/Footer';
import BlogPosts from './Components/BlogPosts';
import BlogPostNew from './Components/BlogPostNew';
import TestStyles from './Components/TestStyles';

function App() {
  return (
    <div className="App">
      <Header />
      <BlogPostNew />
      <BlogPosts />
      <TestStyles />
      <Footer />
    </div>
  );
}

export default App;
