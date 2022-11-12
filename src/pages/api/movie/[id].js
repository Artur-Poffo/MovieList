import { urlBase, apiKey } from "../../../tmdb"

export default async function handler(req, res) {
  const list = await fetch(`${urlBase}/movie/${req.query.id}?api_key=${apiKey}`)
  const data = await list.json()

  res.status(200).json({ movie: data })
}