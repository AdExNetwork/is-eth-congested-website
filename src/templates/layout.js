/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import { ThemeProvider } from "@material-ui/core/styles"
import { useStaticQuery, graphql } from "gatsby"
import { defaultTheme } from "themes"
import { Container, Box } from "@material-ui/core"
import Header from "common/components/header"
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <ThemeProvider theme={defaultTheme}>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <Container>
        <Box py={3}>{children}</Box>
      </Container>
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
