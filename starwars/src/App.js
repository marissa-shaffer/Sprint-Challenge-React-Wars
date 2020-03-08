import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import Posts from "./components/Posts.js";
import styled from "styled-components";

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  const [people, setPeople] = useState([]);

  useEffect(() => {
    axios.get("http://swapi.co/api/people/")
    .then(response => {
      setPeople(response.data.results);
    });
  }, []);
  useEffect(() => {

  }, [people]);

  const Header1 = styled.h1`
  font-size: 50px;
`
  return (
    <div className="App">
      <Header1 className="Header">React Wars</Header1>
      {people.map(item => {
        return (<Posts props = {item}/>)
      })}
    </div>
  );
}

export default App;
