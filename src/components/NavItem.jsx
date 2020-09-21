import React, {Component} from 'react'
import {Link} from 'react-router-dom'

class NavItem extends Component {
  render() {
    return (
      <li id={this.props.item}>
        <Link
          className="link"
          to={this.props.toLink}
          onClick={this.props.activec.bind(this, this.props.item)}
        >
          {this.props.item}
        </Link>
      </li>
    )
  }
}

export default NavItem
