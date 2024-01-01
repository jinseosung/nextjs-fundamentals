import Seo from "@/components/Seo";
import { Movie } from "@/type/Movies";
import Image from "next/image";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import Link from "next/link";

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${process.env.API_KEY}`,
  },
};

export default function Home({
  results,
}: InferGetServerSidePropsType<GetServerSideProps>) {
  return (
    <div className="container">
      <Seo title="Home" />
      {results?.map((movie: Movie) => (
        <Link
          href={{
            pathname: `/movies/${movie.original_title}/${movie.id}`,
          }}
          key={movie.id}
        >
          <div className="movie">
            <div className="image">
              <Image
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.original_title}
                width={230}
                height={345}
              />
            </div>
            <h4>{movie.original_title}</h4>
          </div>
        </Link>
      ))}
      <style jsx>{`
        .container {
          display: grid;
          grid-template-columns: 1fr 1fr;
          padding: 20px;
          gap: 20px;
        }
        .movie {
          cursor: pointer;
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

export async function getServerSideProps({}: GetServerSideProps) {
  const { results } = await (
    await fetch(
      "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
      options
    )
  ).json();

  return {
    props: { results },
  };
}
