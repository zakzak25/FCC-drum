import React, { useState } from 'react';



const App = () => {

  const [rengeVolum , setRendeVolume] = useState(0)

  return(
    <div id="drum-machine">
      <div className="butoons-div">
        <div>
            <div className="drum-pad" id="Q">Q</div>
            <div className="drum-pad" id="W">W</div>
            <div className="drum-pad" id="E">E</div>
        </div>
        <div>
            <div className="drum-pad" id="A">A</div>
            <div className="drum-pad" id="S">S</div>
            <div className="drum-pad" id="D">D</div>
        </div>
        <div>
            <div className="drum-pad" id="Z">Z</div>
            <div className="drum-pad" id="X">X</div>
            <div className="drum-pad" id="C">C</div>
        </div>
      </div>
      <div id="dispaly">
        <div className="turn-div"></div>
        <div className="result"></div>
        <input type='range' max={1} min={0} step={0.01} value={rengeVolum} />
      </div>
    </div>
  )
}


export default App;