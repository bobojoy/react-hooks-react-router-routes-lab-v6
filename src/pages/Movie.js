import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NavBar from "../components/NavBar";

function Movie() {
  // Extract the movieId from the URL parameters
  const { id: movieId } = useParams();  // Renaming `id` to `movieId` for clarity
  const [movie, setMovie] = useState({});

  useEffect(() => {
    // Fetch the movie data using the movieId
    fetch(`http://localhost:4000/movies/${movieId}`)
      .then((res) => res.json())
      .then((data) => setMovie(data))
      .catch((error) => console.error('Error fetching movie:', error));  // Added error handling
  }, [movieId]);

  if (!movie.title) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <h1>{movie.title}</h1>
        <p>{movie.time}</p>
        {movie.genres && movie.genres.map((item, index) => (
          <span key={index}>{item}</span>
        ))}
      </main>
    </>
  );
}

export default Movie;

