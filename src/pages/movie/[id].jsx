import { Container, Bg, Infos, GenreList } from "../../styles/MoviePage"

export default function Movie({ movie }) {
  return (
    <Container>
      <Bg src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`} >
        <Infos>
          <h1>{movie.title}</h1>
          <p>{movie.overview}</p>
          <GenreList>
            {movie.genres.map(genre => {
              return (
                <li key={genre.id} >{genre.name};</li>
              )
            })}
          </GenreList>
          <span>Rating: {movie.vote_average}</span>
        </Infos>
      </Bg>
    </Container>
  )
}

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: "blocking",
  }
}

export async function getStaticProps(context) {
  const res = await fetch(`https://movies-lists-ssr.vercel.app/api/movie/${context.params.id}`)
  const data = await res.json()

  return {
    props: {
      movie: data.movie
    },
    revalidate: 1000
  }
}