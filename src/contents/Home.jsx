import React, {Component} from 'react'
import ReactTypingEffect from 'react-typing-effect'
import profilePic from '../img/ana_vale.jpeg'
import Social from '../components/Social'

class Home extends Component {
  render() {
    return (
      <div className="condiv home">
        <img src={profilePic} alt="ana-vale" className="profilepic"></img>
        {/* <p>
          <img
            src="https://d3krbp903wqqpk.cloudfront.net/ana_vale.jpeg"
            alt="my test image"
          />
        </p> */}
        <ReactTypingEffect
          className="typingEffect"
          text={['I am Ana', 'I am a frontend developer']}
          speed={60}
          eraseDelay={500}
        />
        <Social />
      </div>
    )
  }
}

export default Home
