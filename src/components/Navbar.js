import React, { useState } from "react"
import { Link } from "gatsby"

import HamburgerMenu from "react-hamburger-menu"

import NavbarStyle from "./styles/navbar.module.scss"
import Logo from "../images/logo.svg"

const Navbar = () => {
  const [open, setOpen] = useState(false)

  const handleToggle = () => {
    setOpen(prevOpen => !prevOpen)
  }

  return (
    <nav className={NavbarStyle.navbar}>
      <Link to="/">
        <Logo />
      </Link>
      <ul className={NavbarStyle.navbarItems}>
        <li>
          <Link to="/" activeClassName={NavbarStyle.activeItem}>
            home
          </Link>
        </li>
        <li>
          <Link to="/portfolio" activeClassName={NavbarStyle.activeItem}>
            portfolio
          </Link>
        </li>
        <li>
          <Link to="/contact" activeClassName={NavbarStyle.activeItem}>
            contact me
          </Link>
        </li>
      </ul>

      <div className={NavbarStyle.hamburger}>
        <HamburgerMenu
          isOpen={open}
          menuClicked={handleToggle}
          width={18}
          height={15}
          strokeWidth={1}
          rotate={0}
          color="black"
          borderRadius={0}
        />
        <div
          className={NavbarStyle.hamburgerMenu}
          style={{ opacity: open ? 1 : 0 }}
        >
          <ul className={NavbarStyle.hamburgerItems}>
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
        </div>
      </div>
    </nav>
  )
}

export default Navbar
