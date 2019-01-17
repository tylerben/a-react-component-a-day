import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Image from '../components/image'
import SEO from '../components/seo'
import Nav from '../components/nav'

const HomePage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h1>Welcome to A Component a Day</h1>
    <p>I will be testing out and learning more about Gatsby by developing one component a day</p>
    <Nav />
    {/* <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div> */}
    {/* <Link to="/day-1/">Go to Day 1</Link> */}
  </Layout>
)

export default HomePage
