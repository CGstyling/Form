import React from 'react';
import './App.css';


function App() {
  const [state, setState] = React.useState({
    name: "",
    age:"",
    comments: "",
    check: false
  });

  function handleChange(e) {
    const value =
       e.target.type === "checkbox" ? e.target.checked : e.target.value;
    setState({
      ...state,
      [e.target.name]:value
    });
  }

  function handleClick(e) {
    e.preventDefault();
    console.log(state);
  }

  return (
      <>
        <form onSubmit={handleClick}>
          <fieldset>
            <legend><h2>Gegevens:</h2></legend>
            <label htmlFor="naam">
              Name:
              <input
                  type="text"
                  id="naam"
                  name="name"
                  value={state.name}
                  onChange={handleChange}
                  placeholder="Type your name here..."
              />
            </label>

            <br/>

            <label htmlFor="leeftijd">
              Leeftijd:
              <input
                  type="number"
                  id="leeftijd"
                  name="age"
                  value={state.age}
                  onChange={handleChange}
              />
            </label>
          </fieldset>

          <fieldset>
            <legend><h2>Jouw review</h2></legend>

            <label htmlFor="text">
              <p>comments:</p>
              <textarea
                  name="comments"
                  id="text"
                  cols="45"
                  rows="6"
                  placeholder="Hoe vond je het recept?"
                  value={state.comments}
                  onChange={handleChange}>
                </textarea>
            </label>

            <br/>

            <label htmlFor="form">
              <input
                  type="checkbox"
                  id="form"
                  name="check"
                  checked={state.check}
                  onChange={handleChange}
              />
              Ik schrijf mij in voor de nieuwsbrief
            </label>

            <button type="submit">
              Versturen
            </button>
          </fieldset>
        </form>
      </>
  );
}

export default App;
