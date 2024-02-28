import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import 'yet-another-react-lightbox/styles.css'

import { register } from 'swiper/element/bundle'
import 'swiper/css'
register()

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <App />
  // </React.StrictMode>
)
