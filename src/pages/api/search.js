import { urlBase, apiKey } from "../../tmdb"

export default async function handler(req, res) {
  const list = await fetch(`${urlBase}/search/movie?api_key=${apiKey}&query=${req.query.name}`)
  const data = await list.json()

  res.status(200).json({ list: data.results })
}
