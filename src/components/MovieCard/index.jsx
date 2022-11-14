import { Card } from "./styles"
import Link from "next/link"
import Image from "next/image"

export default function MovieCard(props) {
  const urlImage = `https://image.tmdb.org/t/p/original${props.poster}`

  return (
    <Card key={props.id} >
      <Link href={`/movie/${props.id}`} >
        <Image width={220} height={300} placeholder="blur" blurDataURL={urlImage} src={urlImage} alt="Imagem do filme" />
        <p>{props.title}</p>
      </Link>
    </Card>
  )
}