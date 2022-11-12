import { Container, Title } from "../styles/about"

export default function About() {
  return (
    <Container>
      <Title>About:</Title>

      <p>App in Next.js that queries external API to collect various movie data and transform this data into an intuitive interface,
        using: SSG (Static Site Generation), CSR (Client Side Rendering) and SSR (Server Side Rendering)</p>
    </Container>
  )
}

export async function getStaticProps() {
  return {
    props: {

    }
  }
}