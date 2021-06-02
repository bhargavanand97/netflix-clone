import React, { Component } from 'react';
import Nav from '../nav/nav';
import Banner from '../banner/banner';
import requests from '../../axios/requests'
import Row from '../row/row';

const HomeScreen = () => {
  return (
    <div className='homeScreen'>
      <Nav />
      <Banner />
      <Row title="Netflix Originals" fetchUrl = {requests.fetchNetflixOriginals} isLargeRow/>
      <Row title="Top Rated" fetchUrl = {requests.fetchTopRated}/>
      <Row title="Romance" fetchUrl = {requests.fetchRomanceMovies}/>
      <Row title="Trending" fetchUrl = {requests.fetchTrending}/>
      <Row title="Comedy" fetchUrl = {requests.fetchComedyMovies}/>
      <Row title="Documentaries" fetchUrl = {requests.fetchDocumentaries}/>
      <Row title="Horror" fetchUrl = {requests.fetchHorrorMovies}/>
      <Row title="Action" fetchUrl = {requests.fetchActionMovies}/>
    </div>
  );
};

export default HomeScreen;
