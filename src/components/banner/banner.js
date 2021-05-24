import React, { useState, useEffect } from 'react';
import './banner.scss';
import axios from '../../axios/axios';
import requests from '../../axios/requests';

const Banner = () => {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginals);
      setMovie(request.data.results[Math.floor(Math.random() * request.data.results.length - 1)]);
      return request;
    }
    fetchData();
  }, []);

  console.log(movie);
  const truncate = (string, n) => {
    return string?.length > n ? string.substr(0, n - 1) + '...' : string;
  };

  return (
    <header
      className='banner'
      style={{ backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")` }}
    >
      <div className='banner__contents'>
        <div className='banner__title'>
          <h1>{movie?.title || movie?.name || movie?.original_name}</h1>
        </div>
        <div className='banner__buttons'>
          <button className='banner__button'>Play</button>
          <button className='banner__button'>My List</button>
        </div>
        <div className='banner__description'>
          <h2>{truncate(`${movie?.overview}`, 150)}</h2>
        </div>
        <div className='banner--fadeBottom'></div>
      </div>
    </header>
  );
};

export default Banner;