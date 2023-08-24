import logo from './logo.svg';
import './App.css';
import {useEffect} from 'react';


function App() {

useEffect(() => {
  window.addEventListener('message', (event) => {
    if (event.data && event.data.type === 'dataFromRN') {
      const receivedData = event.data.payload;
      console.log('Received data from React Native:', receivedData);
  }
  });
})


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <button id="message">Click hete</button>
      </header>
    </div>
  );
}

export default App;
