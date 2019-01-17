import React, { Component } from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';
import day1Styles from '../components/styles/day2.css';

class Items extends Component {
  state = {
    items: ['Item 1', 'Item 2', 'Item 3', 'Item 4'],
  }

  orderItems = (activeItem, direction) => {
    // get index of active item
    // move active item up or down one
    const { items } = this.state;
    const index = items.indexOf(activeItem);    
    items.splice(index, 1);

    if (direction === 'up' && index !== 0) {
      items.splice(index-1, 0, activeItem);
    } else if (direction === 'down' && index !== items.length) {
      items.splice(index+1, 0, activeItem);
    } else {
      items.splice(index, 0, activeItem);
    }
    this.setState({ items });
  }

  render() {
    return (
      <div className="items">
        {this.state.items.map(item => {
          return <Item onClick={this.orderItems} key={item} title={item} />
        })}
      </div>
    );
  }
}

class Item extends Component {
  handleReOrder = () => {
    console.log(this);
    this.props.onClick(this.props.title, this.direction);  
  }

  render() {
    return (
      <div className="item">
        <span className="title">{this.props.title}</span>        
        <span className="up" onClick={() => this.props.onClick(this.props.title, 'up')}>Up</span>        
        <span className="down" onClick={() => this.props.onClick(this.props.title, 'down')}>Down</span>
      </div>
    );
  }
}

const Day2 = () => (
  <Layout>
    <SEO title="Day Two" />
    <h1>Day 2</h1>
    <p>Welcome to Day 2 - The reorder component</p>
    <p>This component demonstrates how a list can be re-ordered using "Up" and "Down" buttons.</p>
    <Items />
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default Day2;
