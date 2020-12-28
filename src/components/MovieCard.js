import React from 'react';

function MovieCard({movie}) {
   
   return (
      <div className="movieContainer">         
            <div className="card">
               <img className="cardImage"
                  src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}`}
                  alt={movie.title + ' poster'}
               />
               <h3>{movie.title}</h3>
            </div>
      </div>
   )
}

export default MovieCard