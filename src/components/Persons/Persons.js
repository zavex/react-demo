import React, {Component} from 'react';
import Person from './Person/Person';

class Persons extends Component {

    shouldComponentUpdate(nextProps, nextState) {   //Fetch data from server 
        console.log('[Persons.js] shouldComponentUpdate');
        if (nextProps.persons !== this.props.persons) {
            return true;
        }else {
            return false;
        }
        
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {         //sort of rollback
        console.log('[Persons.js] getSnapshotBeforeUpdate');
        return {message : 'This is Xavi'};
    }

    componentDidUpdate (prevProps, prevState, snapshot) {   //Fetch data from server as well 
        console.log('[Persons.js] componentDidUpdate');
        console.log(snapshot);
    }

    componentWillUnmount () {       //clean up work
        console.log('[Persons.js] componentWillUnmount');
    }

    render () {
        return this.props.persons.map((person, index ) => {
            return (
                <Person key = {person.id} 
                click = {() => this.props.clicked(index)} 
                name = {person.name} 
                age = {person.age}
                changed = {(event) => this.props.changed(event, person.id)} 
                />
            );
        });
    } 
}
export default Persons;