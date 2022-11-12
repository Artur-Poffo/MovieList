import { Nav } from "./styles"
import List from "./List"

export default function NavBar() {
  return (
    <>
      <Nav>
        <List links={[{ name: "Home", to: "/" }, { name: "About", to: "/about" }, { name: "Search", to: "/search" }]} />
      </Nav>
    </>
  )
}