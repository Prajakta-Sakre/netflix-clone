import React from 'react';
import './App.css';
import Row from './Row';
 import requeste from './Requests';
import Banner from './Banner';
import Nav from './Nav';
function App() {
  return (
    <div className="app">    
    <Nav/>                             
      <Banner/>
      <Row title="NETFLIX ORIGINALS" 
      fetchUrl={requeste.fetchNetflixOriginals}
      isLargeRow
      />
      <Row title="Trending Now" fetchUrl={requeste.fetchTrending}/>
      <Row title="Top Rated" fetchUrl={requeste.fetchTopRated}/>
      <Row title="Comedy Movies" fetchUrl={requeste.fetchComedyMovies}/>
      <Row title="Horror Movies" fetchUrl={requeste.fetchHorrorMovies}/>
      <Row title="Romance Movies" fetchUrl={requeste.fetchRomanceMovies}/>
      <Row title="Documentaries" fetchUrl={requeste.fetchDocumentaries}/>
      
    </div>
  );
}

export default App;
