import logo from './logo.svg';
import { useEffect, useState } from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import Footer from './Components/Footer'
import Header from './Components/Header'
import Slider from './Components/Slider'
import Newscard from './Components/Newscard'
import Data from './Components/Data'
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import Detail from './Components/Detail';
function App() {
  //fetch data of tech news 
  const [statetech, setState] = useState([]);
  const [stateTop, setStateTop] = useState([]);
  const [stateSports, setStateSocial] = useState([]);
  const [stateContry, setStateContry] = useState([]);
  useEffect(() => {

    fetch("https://newsapi.org/v2/everything?domains=techcrunch.com,thenextweb.com&apiKey=174101a12d3444e793a0e2f34d414844")
      .then((responce) => responce.json())
      .then((data) => setState(data.articles))
    fetch("https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=174101a12d3444e793a0e2f34d414844")
      .then((responce) => responce.json())
      .then((data) => setStateContry(data.articles))
    fetch("https://newsapi.org/v2/everything?domains=wsj.com&apiKey=174101a12d3444e793a0e2f34d414844")
      .then((responce) => responce.json())
      .then((data) => setStateTop(data.articles))
    fetch("https://newsapi.org/v2/everything?q=tesla&from=2021-05-05&sortBy=publishedAt&apiKey=174101a12d3444e793a0e2f34d414844")
      .then((responce) => responce.json())
      .then((data) => setStateSocial(data.articles))

  }, [])

  return (
    <div>


      {/* <Slider /> */}


      <Footer />
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/top" element={
            stateTop.map((value, key) => {
              return <Newscard key={key} {...value} />
            })} />

          <Route path="/sport" element={
            stateSports.map((value, key) => {
              return <Newscard key={key} {...value} />
            })} />

          <Route path="/tech" element={
            statetech.map((value, key) => {
              return <Newscard key={key} {...value} />
            })}>

            <Route path="detail" element={
              <Detail />} />
          </Route>
          
          <Route path="/contry" element={
            stateContry.map((value, key) => {
              return <Newscard key={key} {...value} />
            })} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
