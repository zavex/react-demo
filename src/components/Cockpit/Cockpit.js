import React, {useEffect} from 'react';
import classes from './Cockpit.css';


const Cockpit = (props) => {
    useEffect (() => {
        console.log('[Cockpit.js] useEffect');
        //http Request...
        const timer = setTimeout(() => {
            console.log('Data saved on cloud');
        },1000);
        return () => {
            clearTimeout(timer);
            console.log('[Cockpit.js] Cleanup work in useEffect');
        };
    },[]);  //empty array to call it just one time, at the beginning 


    //useEffect();

    const classesLoader = [];
    let btnClass = '';

    if (props.showPersons) {
        btnClass = classes.Red;
    }

    if (props.persons.length <=2 ) {
        classesLoader.push(classes.red);
    }
    if (props.persons.length <=1 ) {
        classesLoader.push(classes.bold);
    }

    return (
        <div className = {classes.Cockpit}>
            <h1>{props.title}</h1>
            <p className = {classesLoader.join(' ')}>Innovating .... always </p>
            <button className = {btnClass} onClick={props.clicked}>Toogle List</button>
            
          </div>
    );
};


export default Cockpit;