import React, { Component } from 'react';
import random from 'lodash/random';
import './Horse.css';

class Horse extends Component{
  constructor(props){
    super(props);
    this.state = {
      distance: 0
    }
  }

  render(){
    if(this.props.active){
      var raceTimeout = setTimeout(() => {
        this.setState({
          distance: this.state.distance+ random(1,10)
        })
      }, 100);

      if((this.state.distance >= (this.props.distance - 98)) || !this.props.active ){
        this.props.endrace(this.props.name);
        clearTimeout(raceTimeout);
      }
    }

    return (
      <div className="horse" style={{
        left: `${this.state.distance}px`,
      }}>
        {this.props.name}
      </div>
    );
  }
}

export default Horse;