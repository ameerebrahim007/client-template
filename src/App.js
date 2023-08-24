
import './App.css';
import {useEffect, useState} from 'react';


function App() {

  const [ data, setData ] = useState([''])

useEffect(() => {
  window.addEventListener('message', (event) => {
    if (event.data && event.data.type === 'dataFromRN') {
      const receivedData = event.data.payload;
      setData(JSON.parse(receivedData));
      console.log('Received data from React Native:', receivedData);
  }
  });
})

const handleClick= () => {
  // const sendDataToRN = () => {
    const dataToSend = {
      key1: 'Web to App',
      key2: 'value2',
    };
    
    window.postMessage(JSON.stringify(dataToSend), '*');
  // };
}


  return (
    <div className="App">
      <header className="App-header">
        {
          data.subTitle
        }
        <button id="message" onClick={handleClick}>Button1</button>
        {/* <button id="message">Button2</button> */}
      </header>
    </div>
  );
}

export default App;
