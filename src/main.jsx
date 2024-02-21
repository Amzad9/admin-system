import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import { PrimeReactProvider } from 'primereact/api';
import 'react-toastify/dist/ReactToastify.css';
import "primereact/resources/themes/lara-light-cyan/theme.css";

import './index.css'
import { Provider } from 'react-redux';
import store from './store/store.js';

ReactDOM.createRoot(document.getElementById('root')).render(
 
  <React.StrictMode>
   
    <PrimeReactProvider value={{ unstyled: false, pt: {} }}>
    <Provider store={store}>
       <App />
       </Provider>
    </PrimeReactProvider>
  
  </React.StrictMode>,

)
