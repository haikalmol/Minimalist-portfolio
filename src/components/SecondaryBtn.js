import React from "react"
import ButtonStyle from "./styles/Btn.module.scss"
import { Link } from "gatsby"

const SecondaryBtn = props => {
  return (
    <Link
      to={props.link ? props.link : "#"}
      className={ButtonStyle.secondaryButton}
    >
      <p className={ButtonStyle.label}>{props.btnTitle}</p>
    </Link>
  )
}

export default SecondaryBtn
