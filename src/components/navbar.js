import React from "react";

import Resume from "../images/Darien Sokolov - Resume Final.pdf";

class Navbar extends React.Component {
  render(){
    return (
      <div>
        <div className="ui inverted segment">
          <div className="ui inverted secondary pointing menu">
            <a className="active item">
              Home
            </a>
    
            <a className="item" href={Resume} target="_blank">
              Resume
            </a>
    
            <a className="item" href="https://github.com/xt3rm1n8r" target="_blank">
              Github
            </a>
            <a className="item" href="https://www.linkedin.com/in/darien-sokolov/" target="_blank">
              LinkedIn
            </a>
    
            <div className="right menu">
              <a className="ui item">Contact</a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Navbar;