import { Card } from "./styles"
import Link from "next/link"

export default function MovieCard(props) {
  return (
    <Card key={props.id} >
      <Link href={`/movie/${props.id}`} >
        <img width={220} src={`https://image.tmdb.org/t/p/original${props.poster}`} alt="Imagem do filme" />
        <p>{props.title}</p>
      </Link>
    </Card>
  )
}