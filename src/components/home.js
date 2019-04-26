import React from "react";
import Navbar from "./navbar.js";
import Image from "../images/Me2.jpg";

class Home extends React.Component {
  render() {
    return (
        <div>
          <Navbar />
          <div class="ui middle aligned stackable grid container" style={{marginTop: "100px"}}>
            <div class="row">
              <div class="four wide column">
                <img class="ui circular image" src={Image}/>
              </div>
              <div class="eight wide right floated column">
                <h1 class="ui center aligned header">
                  About Me
                </h1>
                <font size="5">
                  Lorem Ipsum, I'm out of Gypsum. I'm also out of time, so here's the last rhyme.
                </font>
              </div>
            </div>
          </div>
        </div>
    );
  }
}

export default Home;