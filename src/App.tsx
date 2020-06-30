import React from 'react';
import './App.css';
import {CustomRouter} from "./routes";
import {Provider} from 'react-redux';
import store from './store'

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <CustomRouter/>
      </div>
    </Provider>
  );
}

export default App;
