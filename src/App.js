import { useState } from 'react';
import './App.css';
import React from 'react';
function App() {


  const handleClick = () => {
    if (inputref.current.value){
      const StrArray = inputref.current.value.trim(',').split(',');
      const arrayToShow = [];

      for (let i = 0; i < 3; i++){
        var item1 = StrArray[Math.floor(Math.random()*StrArray.length)];
        arrayToShow.push(item1);
      }
      setRandomWords(arrayToShow)
    }
    else{
      //error
    }
  }
  const inputref = React.createRef();
  const [randomWords, setRandomWords] = useState([]);
  return (
    <div className="App">
      <header className="App-header">
        <h1>Word Generator App :D</h1>
        <p>
          Paste in list of comma seperated words !!
        </p>

        <input ref = {inputref} style = {{marginLeft:50, marginRight:50}}>
        </input>
        <button style = {{marginLeft:400,marginRight:400, marginTop: 10}} onClick= {() => handleClick()}>
        click me for results
        </button>
        {randomWords.map((val,ind) => {
        return (<div>{val}</div>);
      })}
      </header>


    <div>
      <h1>
      footnotes : improvements on this App.

      </h1>
      - not true random : same word can be picked twice
      - better error handling /messaging on malformed input
      - general look and feel
      - more customization options (show 5 sets of 3 all at once)
    </div>
    </div>
  );
}

export default App;
