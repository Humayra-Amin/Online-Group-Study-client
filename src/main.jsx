import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

import {
  RouterProvider,
} from "react-router-dom";
import router from './Routes/Routes.jsx';
import { HelmetProvider } from 'react-helmet-async';
import AuthProvider from './AuthProvider/AuthProvider.jsx';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </HelmetProvider>
  </React.StrictMode>,
)
