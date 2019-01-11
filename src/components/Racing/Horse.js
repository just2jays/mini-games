import React, { Component } from 'react';
import random from 'lodash/random';

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
      <div style={{
        backgroundImage: `url('https://i.imgur.com/DkVuurO.png')`,
        marginLeft: `${this.state.distance}px`,
        width: `100px`,
        height: `64px`,
        backgroundSize: `contain`,
        backgroundRepeat: `no-repeat`,
      }}>
        {this.props.name}
      </div>
    );
  }
}

export default Horse;