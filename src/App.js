import React, { useState, useEffect } from "react";
import axios from 'axios'
import "./App.css";
import { API_KEY, BASE_URL } from './constants'
import Header from './components/Header'
import Picture from './components/Picture'
import Footer from './components/Footer'


function App() {
  const [nasaData, setNasaData] = useState([])

  useEffect(() => {
    axios.get(`${BASE_URL}${API_KEY}`)
      .then(res => {
        setNasaData(res.data)
      })
      .catch(err => {
        console.log(err)
      })
  }, [])


  return (
    <div className="App">
      <>
        <header className = 'header'>
          < Header date = {nasaData.date} />
        </header>
        <div className = 'pic-container'>
          <Picture img = {nasaData.url}  title = {nasaData.title} explanation = {nasaData.explanation}/>
        </div>
        <footer className = 'footer'>
          <Footer copyright = {nasaData.copyright}  />
        </footer>
      </>

    </div>
  );
}

export default App;
