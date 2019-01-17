import React from 'react'
// Import typefaces
import 'typeface-montserrat'
import 'typeface-merriweather'
import profilePic from './profile-pic.jpg'
import { rhythm } from '../utils/typography'
class Bio extends React.Component {
  render() {
    return (
      <div
        style={{
          display: 'flex',
          marginBottom: rhythm(2.5),
        }}
      >
        <img
          src={profilePic}
          alt={`Ahmed Khokar`}
          style={{
            marginRight: rhythm(1 / 2),
            marginBottom: 0,
            width: rhythm(1.5),
            height: rhythm(2),
            borderRadius: 50,
          }}
        />
        <p>
          Written by <strong>Ahmed Khokar</strong> who loves to build memorable
          user experiences and scalable, reliable web applications.{' '}
          <a href="https://twitter.com/amkhokar1">
            You should follow him on Twitter
          </a>
        </p>
      </div>
    )
  }
}

export default Bio
