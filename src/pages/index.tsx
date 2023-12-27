import Seo from "@/components/Seo";
import { Movies } from "@/type/Movies";
import Image from "next/image";
import { useEffect, useState } from "react";

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${process.env.API_KEY}`,
  },
};

export default function Home() {
  const [movies, setMovies] = useState<Movies>([]);

  useEffect(() => {
    (async () => {
      const { results } = await (
        await fetch(
          "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
          options
        )
      ).json();

      setMovies(results);
    })();
  }, []);

  return (
    <div className="container">
      <Seo title="Home" />
      {movies?.map((movie) => (
        <div className="movie" key={movie.id}>
          <div className="image">
            <Image
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.original_title}
              layout="fill"
            />
          </div>
          <h4>{movie.original_title}</h4>
        </div>
      ))}
      <style jsx>{`
        .container {
          display: grid;
          grid-template-columns: 1fr 1fr;
          padding: 20px;
          gap: 20px;
        }
        .image {
          position: relative;
          max-width: 100%;
          height: 345px;
          border-radius: 12px;
          overflow: hidden;
          transition: transform 0.2s ease-in-out;
          box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
        }
        .movie:hover .image {
          transform: scale(1.05) translateY(-10px);
        }
        .movie h4 {
          font-size: 18px;
          text-align: center;
        }
      `}</style>
    </div>
  );
}
