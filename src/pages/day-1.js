import React, { Component } from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';
import day1Styles from '../components/styles/day1.css';

class Counter extends Component {
  state = {
    count: 0,
  }

  handleIncrement = () => {
    this.setState(state => {
      return {
        count: state.count + 1,
      }
    })
  
  }
  handleDecrement = () => {
    this.setState(state => {
      return {
        count: state.count - 1,
      }
    })
  }

  render() {
    return (
      <div className="counter">
        <div className="count">{this.state.count}</div>
        <button onClick={this.handleIncrement} className="add-btn">Add One</button>
        <button onClick={this.handleDecrement} className="minus-btn">Subtract One</button>
      </div>
    )
  }
}

const Day1 = () => (
  <Layout>
    <SEO title="Day One" />
    <h1>Day 1</h1>
    <p>Welcome to Day 1 - The counter component</p>
    <Counter />
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default Day1
