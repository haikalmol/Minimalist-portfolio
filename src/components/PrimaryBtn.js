import React from "react"
import ButtonStyle from "./styles/Btn.module.scss"
import DownArrow from "../images/icons/down-arrows.svg"
import { Link } from "gatsby"

const PrimaryBtn = props => {
  return (
    <Link
      className={ButtonStyle.primaryButton}
      to={props.link ? props.link : "#"}
    >
      <div className={ButtonStyle.icon}>
        <DownArrow />
      </div>
      <div className={ButtonStyle.label}>{props.title}</div>
    </Link>
  )
}

export default PrimaryBtn
