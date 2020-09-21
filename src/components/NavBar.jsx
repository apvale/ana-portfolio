import React, { Component } from 'react';
import NavItem from './NavItem';

class NavBar extends Component {
  constructor(props){
    super(props);
    this.state = {
      navItemActive: ''
    };
  }

  activeItem = (item) => {
    if(this.state.navItemActive.length > 0){
      document.getElementById(this.state.navItemActive).classList.remove('active');
    }

    this.setState({ navItemActive: item }, () => {
      document.getElementById(this.state.navItemActive).classList.add('active');
    });
  };

  render(){
    return (
      <nav>
        <ul>
          <NavItem item="Home" toLink="/" activec={this.activeItem}></NavItem>
          <NavItem item="About" toLink="/about" activec={this.activeItem}></NavItem>
          <NavItem item="Education" toLink="/education" activec={this.activeItem}></NavItem>
          <NavItem item="Skills" toLink="/skills" activec={this.activeItem}></NavItem>
          <NavItem item="Contact" toLink="/contact" activec={this.activeItem}></NavItem>
        </ul>
      </nav>
    )
  }
};

export default NavBar;
