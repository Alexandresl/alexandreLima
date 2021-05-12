import * as React from "react"
import PropTypes from "prop-types"
import Main from "../Main"
import GlobalStyle from "../../styles/global"
import Navbar from "../NavBar"
import Banner from "../Banner"

const Layout = ({ children }) => {

  return (
    <>
      <GlobalStyle />
      <Navbar />
      <Banner />
      <Main />
      <main>{children}</main>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
