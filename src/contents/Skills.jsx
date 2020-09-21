import React, {Component} from 'react'

class Skills extends Component {
  constructor(props) {
    super(props)
    this.state = {
      mySkills: ['HTML', 'CSS', 'JS', 'React', 'Testing'],
    }
  }
  render() {
    return (
      <div className="condiv skills">
        <h1 className="subtopic">My skills</h1>
        <ul>
          {this.state.mySkills.map((value) => (
            <li>{value}</li>
          ))}
        </ul>
      </div>
    )
  }
}

export default Skills
