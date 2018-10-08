import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import PropTypes from 'prop-types'

import Nav from './comp'

const query = graphql`
  {
    nav: allNavYaml {
      edges {
        node {
          title
          slug
        }
      }
    }
  }
`

export default props => (
  <StaticQuery
    query={query}
    render={data => (
      <Nav nav={data.nav.edges.map(({ node }) => node)} {...props} />
    )}
  />
)

Nav.propTypes = {
  nav: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      slug: PropTypes.string.isRequired,
    })
  ).isRequired,
}