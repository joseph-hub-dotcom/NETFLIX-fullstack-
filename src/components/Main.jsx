import React, { useEffect, useState } from "react";
import requests from "../Request";
import axios from "axios";
const Main = () => {
  const [movies, setMovies] = useState([]);

  const movie = movies[Math.floor(Math.random() * movies.length)];

  useEffect(() => {
    axios.get(requests.requestPopular).then((response) => {
      setMovies(response.data.results);
    });
  }, []);

  //   console.log(movie);

  const truncateString = (str, num) => {
    if (str?.length > num) {
      return str.slice(0, num) + "...";
    } else {
      return str;
    }
  };

  return (
    <>
      <div className="w-full h-[550px] text-white">
        <div className="w-full h-full">
          <div className="absolute w-full h-[550px] bg-gradient-to-r from-black"></div>
          <img
            className="w-full h-full object-cover"
            src={
              movie
                ? `https://image.tmdb.org/t/p/original/${movie.backdrop_path}`
                : "default-image.jpg"
            }
            alt={movie ? movie.title : "Untitled"}
          />
          <div className="absolute w-full top-[20%] p-4 md:p-8">
            <h1 className="text-3xl md:text-5xl font-bold">
              {movie ? `${movie.title}` : "No title"}
            </h1>
            <div className="my-4">
              <button className="border bg-gray-300 text-black border-gray-300 py-2 px-5">
                Watch Later
              </button>
              <button className="border  text-white ml-4 border-gray-300 py-2 px-5">
                Play
              </button>
            </div>
            <p className="text-gray-400 text-sm">
              Released {movie ? `${movie.release_date}` : "N/A"}
            </p>
            <p className="w-full md:max-2-[70%] lg:max-2-[50%] text-gray-200">
              {truncateString(movie ? `${movie.overview}` : "None", 150)}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
