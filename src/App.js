import React, { Component, Fragment } from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import Header from './Header';
import Table from './Table';
import Form from './Form';
import Footer from './Footer';


class App extends Component {

  state = {
    shoes: [
      {
        code: 'SHS2034',
        image: '/images/img2.png',
        brand: 'Osklen',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        colors: [
          'black', 'white'
        ],
        sizes: [
          34, 35, 36, 37, 38
        ],
        price: '€ 43.00',
        value: 0,
      },
      {
        code: 'SHS3431',
        image: '/images/img3.png',
        brand: 'Osklen',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        colors: [
          'black', 'white'
        ],
        sizes: [
          34, 35, 36, 37, 38
        ],
        price: '€ 36.00',
        value: 0,
      },
      {
        code: 'SHS1001',
        image: '/images/img1.png',
        brand: 'Osklen',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        colors: [
          'black', 'white'
        ],
        sizes: [
          34, 35, 36, 37, 38
        ],
        price: '€ 32.00',
        value: 0,
      },

    ]
  }

  handleIncrement = (index) => {
    let { shoes } = this.state;
    shoes[index].value++;
    this.setState({ shoes });
  };

  handleDelete = (index) => {
    console.log('Event Handler Called', index);
    let { shoes } = this.state.filter(c => c.id !== index);
    this.setState({ shoes });
  };

  handleReset = () => {
    let shoes = this.state.shoes.map(c => {
      c.value = 0;
      return c;
    });
    this.setState({ shoes });
  };

  removeShoes = index => {

    let { shoes } = this.state;

    this.setState(
      {
        shoes:  shoes.filter((shoes, newIndex) => {
          return newIndex !== index;
        }),
      }
    )
  }; 

  submitListener = newShoes => {
    this.setState({
      shoes: [...this.state.shoes, newShoes]
    });
  }

  getBadgeClasses() {
    let classes = "new badge ";
    classes += (this.state.shoes.value === 0) ? "red" : "blue";
    return classes;
}

  formatCount(){
    const { value } = this.state.shoes.value
    return value === 0 ? '' : value;
  }

  renderTags(){
    if (this.state.tags.length === 0) 
        return <p>There are no tags!</p>;
    return <ul>{ this.state.tags.map(tag => <li key={tag}>{tag}</li>)}</ul>
}

  render() {
    return(
      <Fragment>
        <Header totalShoes = { this.state.shoes.filter(c => c.value > 0).length } />
        
        <Table 
          shoes = { this.state.shoes } 
          onIncrement = { this.handleIncrement } 
          onDelete = { this.handleDelete }
          onReset = { this.handleReset }
          removeShoes = { this.removeShoes }
        />
        <Form submitListener = { this.submitListener } />
        <Footer />
      </Fragment>
    )
  }
}

export default App;
