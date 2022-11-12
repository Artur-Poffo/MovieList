import { Container, Title, FlexWrap } from "../styles/Home"
import MovieCard from "../components/MovieCard"

export async function getServerSideProps() {
  const res = await fetch("http://localhost:3000/api/trending")
  const data = await res.json()

  return {
    props: {
      movies: data.list
    }
  }
}

export default function Home({ movies }) {
  return (
    <>
      <Container>
        <Title>Trending Movies:</Title>

        <FlexWrap>
          {movies.map(movie => {
            return (
              <MovieCard key={movie.id} id={movie.id} title={movie.title} poster={movie.poster_path} />
            )
          })}
        </FlexWrap>
      </Container>
    </>
  )
}
