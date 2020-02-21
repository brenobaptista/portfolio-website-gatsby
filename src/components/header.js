import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { Component } from "react"

class Header extends Component {
  state = {
    isMenuOpen: false,
  }

  handleMenu = () => {
    this.setState(previousState => ({
      isMenuOpen: !previousState.isMenuOpen,
    }))
  }

  closeMenu = () => {
    this.setState({ isMenuOpen: false })
  }

  render = () => {
    const { siteTitle } = this.props
    const { isMenuOpen } = this.state
    const burgerClass = isMenuOpen ? "is-active" : ""

    return (
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <Link to="/" className="navbar-item is-size-5">
            {siteTitle}
          </Link>

          <a
            role="button"
            className={`navbar-burger burger ${burgerClass}`}
            aria-label="menu"
            aria-expanded="false"
            data-target="myNavbar"
            onClick={this.handleMenu}
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div id="myNavbar" className={`navbar-menu ${burgerClass}`}>
          <div className="navbar-end">
            <Link
              to="/"
              className="navbar-item is-size-5"
              onClick={this.closeMenu}
            >
              HOME
            </Link>
            <Link
              to="/projects/"
              className="navbar-item is-size-5"
              onClick={this.closeMenu}
            >
              PROJECTS
            </Link>
            <Link
              to="/stack/"
              className="navbar-item is-size-5"
              onClick={this.closeMenu}
            >
              STACK
            </Link>
            <Link
              to="/downloads/"
              className="navbar-item is-size-5"
              onClick={this.closeMenu}
            >
              DOWNLOADS
            </Link>
          </div>
        </div>
      </nav>
    )
  }
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
