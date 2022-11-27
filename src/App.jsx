import { useState } from 'react'
import volumeOn from './assets/on.svg'
import volumeOff from './assets/off.svg'
import './App.css'

function App() {
  const [soundStatus, setSoundStatus] = useState("on")
  const [soundStatusPhoto, setSoundStatusPhoto] = useState(volumeOn)

  function turnOnOff(soundStatus) {
  
    if (soundStatus == "on") {
      setSoundStatus("off")
      setSoundStatusPhoto(volumeOff)
    } else if (soundStatus == "off") {
      setSoundStatus("on")
      setSoundStatusPhoto(volumeOn)
    }
  }

  return (
    <div className="App">
        <img src={soundStatusPhoto} className="volume-photo" alt="volume-status-photo" onClick={() => turnOnOff(soundStatus)}/>
        <p>volume is {soundStatus}</p>
    </div>
  )
}

export default App
