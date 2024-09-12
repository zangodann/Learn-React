import { useState } from "react";

export default function Player() {
  const [ enteredName, setEnteredName ] = useState('');
  const [ submitted, setSubmitted ] = useState(false);

  const handleClick = () =>{
    setSubmitted(true);
  };

  const handleChange = (event) =>{
    setSubmitted(false);
    setEnteredName(event.target.value);
  };

  return (
    <section id="player">
      <h2>Welcome {submitted ? enteredName : 'unknown entity'}</h2>
      <p>
        <input type="text" value={enteredName} onChange={handleChange}/>
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
