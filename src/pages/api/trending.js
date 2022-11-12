import { urlBase, apiKey } from "../../tmdb"

export default async function handler(req, res) {
  const list = await fetch(`${urlBase}/trending/movie/week?api_key=${apiKey}`)
  const data = await list.json()

  res.status(200).json({ list: data.results })
}
