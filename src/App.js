import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [data, setData] = useState('');

  // Define the receiveDataFromReactNative function
  window.receiveDataFromReactNative = (dataString) => {
    const data = JSON.parse(dataString);
    console.log('Received data from React Native:', data);
    // Process the received data in your web app
    setData(data);
  };

  

  // Add an event listener to listen for messages from React Native
  // window.addEventListener('message', (event) => {
  //   console.log('data hereeeeee');
  //   if (event.data && event.data.type === 'dataFromRN') {
  //     const receivedData = event.data.payload;
  //     setData(JSON.parse(receivedData));
  //     console.log('Received data from React Native:', receivedData);
  //   }
  // });

  const handleClick = () => {
    // Prepare data to send to React Native
    alert(data);
    const dataToSend = {
      key1: 'Web to App',
      key2: 'value2',
    };

    // Send the data to React Native
    window.postMessage(JSON.stringify(dataToSend), '*');
  };

  

  return (
    <div className="App">
      <header className="App-header">
        {data ? <span>{data.key1}</span> : "Data is empty "}
        <button id="message" onClick={handleClick}>
          Button1
        </button>
        
        <div id="container">hi</div>
      </header>
    </div>
    
  );

  
}

export default App;
