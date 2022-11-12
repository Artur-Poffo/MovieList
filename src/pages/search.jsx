import { useState } from "react"
import { Container, Inputs, FlexWrap } from "../styles/search"
import MovieCard from "../components/MovieCard"

export default function About() {
  const [textInput, setTextInput] = useState("")
  const [movies, setMovies] = useState([])

  async function SearchMovies() {
    if (textInput != "") {
      const res = await fetch(`http://localhost:3000/api/search?name=${textInput}`)
      const data = await res.json()

      setMovies(data.list)
    }
  }

  function HandleInput(text) {
    setTextInput(text)
  }

  return (
    <Container>
      <Inputs>
        <input onChange={(e) => HandleInput(e.target.value)} type="text" name="NameMovie" placeholder="Search..." />
        <button onClick={SearchMovies} >Search</button>
      </Inputs>

      <FlexWrap>
        {movies.map(movie => {
          return (
            <MovieCard key={movie.id} id={movie.id} title={movie.title} poster={movie.poster_path} />
          )
        })}
      </FlexWrap>
    </Container>
  )
}