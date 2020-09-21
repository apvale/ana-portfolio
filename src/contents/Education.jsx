import React, {Component} from 'react'
import WideCard from '../components/WideCard'

class Education extends Component {
  render() {
    return (
      <div className="condiv">
        <h1 className="subtopic">My Education</h1>
        <WideCard
          title="System Analyst"
          where="IFPB"
          from="Aug 2010"
          to="Nov 2014"
        />
      </div>
    )
  }
}
export default Education
