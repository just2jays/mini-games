import React, { Component } from 'react';
import Horse from '../../components/Racing/Horse';
import css from './racing.css';

class Racing extends Component{
  constructor(props){
    super(props);
    this.state = {
      raceActive: false,
      activeHorses: [],
      raceDistance: -100,
      lastWinner: undefined
    };

    this.placeOptions = [
      'Chickfila',
      'Brookfield',
      'Whole Foods',
      'Amish',
      'Lenwich',
      'Hummas & Pita',
      'Nish Nush',
      'Xi\'an Famous Foods',
      'Eataly',
      'Chipotle',
      'Sophie\'s',
      'Hank\'s',
      'Shake Shack',
      'Mulberry & Vine',
      'Woodrow\'s',
      'Rosa Mexicana',
      'Lily\'s ',
      'Monks',
      'Treadwells',
      'Clinton Hall',
      'Wei West',
      'Sauce & Barrel',
    ]
  }

  addHorse = (event) => {
    let horseName = !Array.isArray(event.target) ? event.target.innerHTML : event.target[0].value;
    event.preventDefault();
    this.setState({
      activeHorses: [...this.state.activeHorses, {name: horseName}]
    });
  }

  startRace = () => {
    this.setState({
      raceActive: !this.state.raceActive
    })
  }

  endRace = (winner) => {
    console.log('THE RACE HAS ENDED');
    this.setState({
      raceActive: false,
      lastWinner: winner
    })
  }
  
  setDistance = (event) => {
    event.preventDefault();
    this.setState({
      raceDistance: event.target[0].value
    })
  }

  render(){
    console.log(this.state.activeHorses);
    return (
      <div className="raceContainer">
        { !this.state.raceActive &&
        <div>
          <div>
            <form className="addHorse" onSubmit={this.addHorse}>
              <input type="text" placeholder="Horse 1 Name"></input>
              <input type="submit" value="Add Horse" />
            </form>
            <form className="setDistance" onSubmit={this.setDistance}>
              <input type="text" placeholder="Distance (in px)"></input>
              <input type="submit" value="Set Distance" />
            </form>
            <button onClick={this.startRace}>Begin Race</button>
          </div>
          <div style={{position: 'absolute', marginLeft: `50%`, marginRight: `50%`}}>
            { this.state.lastWinner !== undefined &&
              <div
                className='winnerBox'
                style={{opacity:`0.5`, padding: `20px`, position: `asbolute`, width: `50%`, height: `50%`}}
              >
                <img src="https://i.gifer.com/54vL.gif" /><br />
                WINNER: {this.state.lastWinner}
              </div>
            }
          </div>
        </div>
        }
        <div
          className="finishLine"
          style={{
            width: `5px`,
            backgroundColor: `red`,
            height: `100vh`,
            marginLeft: `${this.state.raceDistance}px`,
            position: `absolute`
          }}
        />
        <div className="trackContainer">
          {this.state.activeHorses.map((horse, i) => {
            return <Horse
              name={horse.name}
              active={this.state.raceActive}
              distance={this.state.raceDistance}
              endrace={this.endRace}
            />
          }
            // {horse}
          )}
        </div>
        <div className='placePanel'>
          <h3>Easy Options:</h3>
          <div>
          {
            this.placeOptions.map( (place, index) => 
              <button onClick={this.addHorse}>{place}</button>
            )
          }
          </div>
        </div>
      </div>
    );
  }
}

export default Racing;