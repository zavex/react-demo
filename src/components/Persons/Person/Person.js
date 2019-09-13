import React, {Component} from 'react';
//import Radium from 'radium';
import classes from './Person.css';

class Person extends Component {
  render () {
    return (
      <div className={classes.Person}>
        <h2 onClick={this.props.click}>I'm {this.props.name} and I have {this.props.age} years young.</h2>
        <h3>{this.props.children}</h3>
        <input type="text" onChange={this.props.changed} name={this.props.name}></input>
      </div>
      );
  }  
  
}

export default Person;