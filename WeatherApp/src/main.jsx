import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// importazione dello store di redux
import store from './redux/store.js'
import {Provider} from 'react-redux'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* inserisco il provider che fornisce accesso allo store Redux a tutti i componenti figli, e gli passo la prop dello store*/}
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>,
)
