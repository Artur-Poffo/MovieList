import Link from "next/link"
import { Links } from "./styles"

export default function List(props) {
  return (
    <>
      <Links>
        {props.links.map((link, index) => {
          return (
            <Link key={index} href={link.to} >
              <li>{link.name}</li>
            </Link>
          )
        })}
      </Links>
    </>
  )
}