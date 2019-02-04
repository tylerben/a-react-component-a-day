import React, { Component } from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';
import '../components/styles/day6.css';

const ItemsControl = ({ onClick, sortAsc, sortDesc }) => (
  <li className="todo-list-item todo-list-controls">
    <i className="material-icons" onClick={onClick}>add</i>
    <i className="material-icons text-rotate-180" onClick={sortAsc}>sort</i>
    <i className="material-icons" onClick={sortDesc}>sort</i>
  </li>
);

class TodoItems extends Component {
  state = {
    items: [
      { title: 'Item 1', status: 'incomplete' },
      { title: 'Item 2', status: 'incomplete' },
      { title: 'Item 3', status: 'incomplete' },
      { title: 'Item 4', status: 'incomplete' },
    ]
  }

  orderItems = (activeItem, direction) => {
    // get index of active item
    // move active item up or down one
    const { items } = this.state;
    const activeItemTitle = activeItem.props.title;
    const itemTitles = items.map(item => item.title);
    const index = itemTitles.indexOf(activeItemTitle);    
    items.splice(index, 1);

    if (direction === 'up' && index !== 0) {
      items.splice(index-1, 0, { title: activeItemTitle, status: 'incomplete' });
    } else if (direction === 'down' && index !== items.length) {
      items.splice(index+1, 0, { title: activeItemTitle, status: 'incomplete' });
    } else {
      items.splice(index, 0, { title: activeItemTitle, status: 'incomplete' });
    }
    this.setState({ items });
  }

  sortAsc = () => {
    this.setState((state, props) => {
      return { 
        items: state.items.sort((a,b) => {
          const aNo = parseInt(a.title.split(' ')[1]);
          const bNo = parseInt(b.title.split(' ')[1]);
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
          const aNo = parseInt(a.title.split(' ')[1]);
          const bNo = parseInt(b.title.split(' ')[1]);
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
      return {items: [...state.items, { title: `Item ${state.items.length + 1}`, status: 'incomplete' }]};
    });
  }

  toggleComplete = (item) => {
    const { title } = item.props;

    this.setState((state, props) => {
      const { items }  = state;
      const itemTitles = items.map(item => item.title);
      const position = itemTitles.indexOf(title);

      if (items[position].status === 'complete') {
        items[position].status = 'incomplete';
      } else {        
        items[position].status = 'complete';
      }
      return {
        items,
      }

      // const { items }  = state;
      // const position = items.indexOf(title);
      // items.splice(position, 1);
      // return {
      //   items,
      // }
    });
  }

  render() {
    return (
      <div>
        <ul className="todo-list">
          <ItemsControl onClick={this.addItem} sortAsc={this.sortAsc} sortDesc={this.sortDesc} />
          {this.state.items.map(item => {
            return <TodoItem onClick={this.orderItems} toggleComplete={this.toggleComplete} key={item.title} title={item.title} status={item.status} />
          })}
        </ul>
      </div>
    );
  }
} //TodoItems

class TodoItem extends Component {
  handleReOrder = () => {
    console.log(this);
    this.props.onClick(this.props.title, this.direction);  
  }

  render() {
    let checkbox;
    let todoClass = 'todo-list-item ';
    if(this.props.status === 'incomplete') {
      checkbox= <i className="material-icons todo-checkbox" onClick={() => this.props.toggleComplete(this)}>check_box_outline_blank</i>
    } else {      
      todoClass += 'todo-list-item-complete'
      checkbox = <i className="material-icons todo-checkbox" onClick={() => this.props.toggleComplete(this)}>check_box</i>
    }

    return (
      <li className={todoClass}>
        {checkbox}
        {this.props.title}
        <div className="controls">
          <i className="material-icons up-arrow" onClick={() => this.props.onClick(this, 'up')}>forward</i>
          <i className="material-icons down-arrow" onClick={() => this.props.onClick(this, 'down')}>forward</i>
        </div>
      </li>
    );
  }
} // TodoItem

class ToDoList extends Component {
  render() {
    return (
      <div>
        <TodoItems />
      </div>
    );
  }
}

const Day5 = () => (
  <Layout>
    <SEO title="Day Five" />
    <div className="component-description">
      <h2 className="page-title">Day 6</h2>
      <div className="author-info">
        <div className="author-avatar"></div>
        <div className="author-name">Ben Tyler | January 24, 2019</div>
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
