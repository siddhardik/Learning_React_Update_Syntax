import React from 'react';

class ComponentB extends React.Component {
   
    constructor(){
       super();

       this.state={
        name:"Jaldi Uhase Hato"
       }

       console.log(" B. Constructor has been invoked => First");
    }

    static getDerivedStateFromProps(){
        console.log(" B. getDerivedStateFromProps has been invoked => Second");
        return null;
    }

    componentDidMount(){
         console.log("B. componentDidMount has been invoked => Last");
    }

    render(){
        console.log("B. This render has been invoked => Third ");
        return (
            <h2>{this.state.name}</h2>
        )
    }

}

export default ComponentB ;