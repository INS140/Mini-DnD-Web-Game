import { useContext } from "react"
import { MenuContext } from "../../contexts/MenuContext"


export default function MenuDisplay() {
  const { menu } = useContext(MenuContext)

  return <>
    { menu }
  </>
}