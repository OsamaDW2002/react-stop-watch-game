import {useRef, useState} from "react";

export default function Player() {
    const playerName = useRef();
    const [enterdPlayerName, setEnterdPlayerName] = useState('');
    return (
    <section id="player">
      <h2>Welcome {enterdPlayerName ? enterdPlayerName : 'unknown'} entity</h2>
      <p>
        <input type="text" ref={playerName}/>
        <button onClick={() => {
            setEnterdPlayerName(playerName.current.value)
            playerName.current.value = '';
        }}>Set Name</button>
      </p>
    </section>
  );
}
