import React, { Component, Fragment } from "react";
// import { browserHistory } from 'react-router';
import MainBody from "./components/MainBody";
import AboutMe from "./components/AboutMe";
import Project from "./components/Project";
import Footer from "./components/Footer";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }


// export default class YourComponent extends Component {
//     handleClick = () => {
//         browserHistory.push('/portfolio');
//     };

  render() {
    return (
      <Fragment>
        <MainBody></MainBody>
        <AboutMe></AboutMe>
        <Project></Project>
        <Footer></Footer>
      </Fragment>
    );
  }
}

export default App;
