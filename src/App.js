import React from 'react';
import './App.css';
import './styles/GeneralStyle.css'
import './styles/LargeStyle.css'
import Header from './components/Header';
import Main from './components/Main';

const App = () => {
  return (
    <div>
      <Header />
      <Main />
    </div>
  );
}

export default App;
