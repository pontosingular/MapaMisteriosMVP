import React from 'react'
import { Router } from 'react-router-dom'
import { Provider } from 'react-redux'

import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import Routes from './routes'
import history from './routes/history'
import GlobalStyle from './styles/global'

import store from './store'

const App = () => (
  <Provider store={store}>
    <ToastContainer
      position="top-center"
      autoClose={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnVisibilityChange
      draggable
    />
    <Router history={history}>
      <Routes />
    </Router>
    <GlobalStyle />
  </Provider>
)

export default App
