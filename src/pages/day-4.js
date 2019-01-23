import React, { Component } from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';
import day4Styles from '../components/styles/day4.css';

class Items extends Component {
  state = {
    items: ['Item 1', 'Item 2', 'Item 3', 'Item 4'],
  }

  sortAsc = () => {
    this.setState((state, props) => {
      return { 
        items: state.items.sort((a,b) => {
          if (a > b) {
            return 1;
          } else if ( a < b) {
            return -1;
          } else {
            return 0;
          }
        }),
      }
    });
  }

  sortDesc = () => {
    this.setState((state, props) => {
      return { 
        items: state.items.sort((a,b) => {
          if (a < b) {
            return 1;
          } else if ( a > b) {
            return -1;
          } else {
            return 0;
          }
        }),
      }
    });
  }

  reorderItems = (activeItem, direction) => {
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

  addItem = () => {
    this.setState((state, props) => {
      return {items: [...state.items, `Item ${state.items.length + 1}`]};
    });
  }

  render() {
    return (
      <div>
        <div className="sort-controls">
          <button className="sort-btn" onClick={this.sortAsc}>Sort Ascending</button>
          <button className="sort-btn" onClick={this.sortDesc}>Sort Descending</button>
        </div>
        <div className="items">
          {this.state.items.map(item => {
            return <Item onClick={this.reorderItems} key={item} title={item} />
          })}
        </div>      
        <ItemsControl onClick={this.addItem} />
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

const ItemsControl = ({ onClick }) => (
  <div>
    <button onClick={onClick} className="add-new-btn">Add New Item</button>
  </div>
);

const Day4 = () => (
  <Layout>
    <SEO title="Day Four" />
    <h1>Day 4</h1>
    <p>Welcome to Day 4 - The sort component</p>
    <p>This component demonstrates how a list can be sorted ascending or descending using buttons.</p>
    <Items />
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default Day4;
