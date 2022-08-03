import './App.css';
import React, {useEffect} from 'react';
import Header from './header';

const Hydra = require('hydra-synth');


function App() {
  var can = document.createElement("canvas")
  can.setAttribute("class","hello")
  can.setAttribute("id", "canv")


    const createHydra = (context) => {
      const hydra = new Hydra({
        detectAudio: false,
        canvas: can,
        makeGlobal: false
      }).synth
      hydra.gradient(1).out()
    }

    useEffect(() => {
      createHydra()
      const A = document.getElementById("App")
      A.insertBefore(can, A.childNodes[0])
    }, [can])

  return (
    <div id="App" className="App">
      <Header />
    </div>
  );
}

export default App;


// id="can" draw={createHydra} height={200} width={200}