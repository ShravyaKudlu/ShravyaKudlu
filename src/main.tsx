import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.tsx';
import './index.css';

const AppContainer: React.FC = () => (
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

ReactDOM.render(<AppContainer />, document.getElementById('root'));
