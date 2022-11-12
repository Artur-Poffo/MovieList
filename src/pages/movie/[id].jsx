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
                <li key={genre.id} >{genre.name}</li>
              )
            })}
          </GenreList>
          <span>Rating: {movie.vote_average}</span>
        </Infos>
      </Bg>
    </Container>
  )
}

export async function getServerSideProps(context) {
  const res = await fetch(`http://localhost:3000/api/movie/${context.params.id}`)
  const data = await res.json()

  return {
    props: {
      movie: data.movie
    }
  }
}