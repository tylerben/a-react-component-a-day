import React, { Component } from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';
import '../components/styles/day5.css';

const ItemsControl = ({ onClick, sortAsc, sortDesc }) => (
  <li className="todo-list-item todo-list-controls">
    <i className="material-icons" onClick={onClick}>add</i>
    <i className="material-icons text-rotate-180" onClick={sortAsc}>sort</i>
    <i className="material-icons" onClick={sortDesc}>sort</i>
  </li>
);

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

  sortAsc = () => {
    this.setState((state, props) => {
      return { 
        items: state.items.sort((a,b) => {
          const aNo = parseInt(a.split(' ')[1]);
          const bNo = parseInt(b.split(' ')[1]);
          if (aNo > bNo) {
            return 1;
          } else if ( aNo < bNo) {
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
          const aNo = parseInt(a.split(' ')[1]);
          const bNo = parseInt(b.split(' ')[1]);
          if (aNo < bNo) {
            return 1;
          } else if ( aNo > bNo) {
            return -1;
          } else {
            return 0;
          }
        }),
      }
    });
  }

  addItem = () => {
    this.setState((state, props) => {
      return {items: [...state.items, `Item ${state.items.length + 1}`]};
    });
  }

  render() {
    return (
      <div>
        <ul className="todo-list">
          <ItemsControl onClick={this.addItem} sortAsc={this.sortAsc} sortDesc={this.sortDesc} />
          {this.state.items.map(item => {
            return <Item onClick={this.orderItems} key={item} title={item} />
          })}
        </ul>
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
      <li className="todo-list-item">
        {this.props.title}
        <div className="controls">
          <i className="material-icons up-arrow" onClick={() => this.props.onClick(this.props.title, 'up')}>forward</i>
          <i className="material-icons down-arrow" onClick={() => this.props.onClick(this.props.title, 'down')}>forward</i>
        </div>
      </li>
    );
  }
}

class ToDoList extends Component {
  render() {
    return (
      <div>
        <Items />
      </div>
    );
  }
}

const Day5 = () => (
  <Layout>
    <SEO title="Day Five" />
    <div className="component-description">
      <h2 className="page-title">Day 5</h2>
      <div className="author-info">
        <div className="author-avatar"></div>
        <div className="author-name">Ben Tyler | January 21, 2019</div>
      </div>
      <p>Welcome to Day 5 - Basic List (Material Design Restyle)</p>
      <p>This page highlights a basic list created with React. Items in this list can be moved up and down using the associated arrows. Additionally, users can add new items and sort the list in ascending or descending order using the controls above the list.</p>
      <Link to="/">Go back to the homepage</Link>
    </div>
    <div className="component-container">
      <ToDoList />
    </div>
  </Layout>
)

export default Day5;
