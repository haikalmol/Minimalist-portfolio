import React from "react"
import { Link } from "gatsby"
import FooterStyle from "./styles/footer.module.scss"
import Logo from "../images/logo.svg"
import { FaGithub, FaTwitter } from "react-icons/fa"
import { AiFillInstagram } from "react-icons/ai"
const Footer = () => {
  return (
    <div className={FooterStyle.footerContainer}>
      <footer className={FooterStyle.footer}>
        <Link to="/">
          <Logo className={FooterStyle.logoWhite} />
        </Link>
        <ul className={FooterStyle.footerItems}>
          <li>
            <Link to="/">home</Link>
          </li>
          <li>
            <Link to="/portfolio">portfolio</Link>
          </li>
          <li>
            <Link to="/contact">contact me</Link>
          </li>
        </ul>
        <div className={FooterStyle.socialIcons}>
          <a href="https://github.com/" target="_blank" rel="noreferrer">
            <FaGithub style={{ width: "25px", height: "24px" }} />
          </a>
          <a href="https://twitter.com/" target="_blank" rel="noreferrer">
            <FaTwitter style={{ width: "24px", height: "19.5px" }} />
          </a>
          <a href="https://instagram.com/" target="_blank" rel="noreferrer">
            <AiFillInstagram style={{ width: "24px", height: "24px" }} />
          </a>
        </div>
      </footer>
    </div>
  )
}

export default Footer
