import React, {Component} from 'react';
//import Radium, {StyleRoot} from 'radium';
import classes from './App.css'; 
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

class App extends Component {
    state = {
      person : [
        {id : "1", name : "Save" , age: 26},
        {id : "2", name : "Omar" , age: 30},
        {id : "3", name : "Ivan" , age: 35}
      ],
      otherState : "Some other value",
      showPersons : false,
      showCockpit : true
    }

    nameChangedHandler = (event, id ) => {
      const personIndex = this.state.person.findIndex(p => {   // encontrar la persona en base al indice 
        return p.id === id;
      });
      
      const personn = {
        ...this.state.person[personIndex]    // copiar la persona encontrada a una persona nueva
      }
      //alternative 
      //const person = Object.assign({},this.state.person[personIndex]);

      personn.name = event.target.value;   //cambiar el nombre en la persona nueva 

      const person = [...this.state.person];   //  copiamos el objeto persona a un nuevo objeto persona 

      person[personIndex] = personn;   //copiamos la nueva persona al nuevo objeto persona 

      this.setState({ person : person });  // seteamos el estado objeto persona con el nuevo objeto persona actualizado 
    }

    deletePersonHandler = (indexPerson) => {
      //const persons = this.state.person.slice();
      const persons = [...this.state.person];
      persons.splice(indexPerson,1);
      this.setState({person: persons})
    }


    tooglePersonHandler = () => {
      const doesShow = this.state.showPersons;
      this.setState({showPersons: !doesShow});
    }

    render () {
      let persons = null;
      if (this.state.showPersons) {
        persons = (
          <div>
          <Persons persons = {this.state.person} clicked = {this.deletePersonHandler} changed = {this.nameChangedHandler}/>
         </div> 
        );
      }

      return (
          <div className={classes.App}>
            { this.state.showCockpit ? (
              <Cockpit title = {this.props.AppTitle} persons = {this.state.person} showPersons = {this.state.showPersons} clicked = {this.tooglePersonHandler}
              />
            ) : null}             
            {persons}
            <button className={classes.App} onClick={() => {
              this.setState({showCockpit: false})
              }}
            >
            Remove Cockpit</button>
          </div>
      );
    }
}

export default App;