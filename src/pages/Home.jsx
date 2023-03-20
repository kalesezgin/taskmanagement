import React, { Component } from 'react'
import Navigation from '../components/Navigation'
import TaskTexts from '../components/TaskTexts'
import Footer from '../components/Footer'
import '../App.css'
class Home extends Component {
  render() {
    return (
      <>
        <Navigation  />
        <TaskTexts/>
        <Footer/>
      </>
    )
  }
}
export default Home
