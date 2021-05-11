import * as React from "react"
import PropTypes from "prop-types"
import Main from "../Main"
import GlobalStyle from "../../styles/global"

const Layout = ({ children }) => {

  return (
    <>
      <GlobalStyle />
      <Main />
      <main>{children}</main>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
