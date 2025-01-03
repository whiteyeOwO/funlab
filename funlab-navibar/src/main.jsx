import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './styles/App.scss';
import { BrowserRouter } from 'react-router-dom'

const basename = process.env.NODE_ENV === "production" ? "/funlab/" : "/";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename={basename}>
      <App />
      </BrowserRouter>
  </React.StrictMode>,
)
