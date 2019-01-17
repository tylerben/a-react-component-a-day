import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql, Link } from 'gatsby'

const Nav = ({ children }) => (
  <StaticQuery
    query={graphql`
      query {
        allSitePage {
          edges {
            node {
              id
              path
            }
          }
        }
      }
    `}
    render={data => (
      <>
        <ul>
          {data.allSitePage.edges
            .filter(edge => edge.node.path.includes('day'))
            .map((edge, index) => {
              return (
              <Link to={edge.node.path}>
                <li key={edge.node.id}>Day {index+1}</li>
              </Link>
              );
            })
          }
        </ul>
      </>
    )}
  />
)

// Nav.propTypes = {
//   children: PropTypes.node.isRequired,
// }

export default Nav;
