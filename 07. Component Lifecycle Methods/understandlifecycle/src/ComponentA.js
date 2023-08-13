import React from 'react';
import ComponentB from "./ComponentB";

class ComponentA extends React.Component {

    constructor() {
        super();

        this.state = {
            name: "Jaldi Uhase Hato",
            data:[]
        }

        console.log("A. Constructor has been invoked => First");
    }

    static getDerivedStateFromProps() {
        console.log("A. getDerivedStateFromProps has been invoked => Second");
        return null;
    }

    componentDidMount() {
        console.log("A. componentDidMount has been invoked => Last");
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((response) => response.json())
            .then((jsonData) =>{
                console.log(jsonData);
                this.setState({data : jsonData});
            } )
    }

    render() {
        console.log("A. This render has been invoked => Third ");
        return (
            <>
                <h1>{this.state.name}</h1>
                <ComponentB />
                { console.log( this.state.name)} 

                <ul>
                    {
                      
                        this.state.data.map(
                            (d,index)=>{
                                return (
                                    <li key = {index}>{ d.username}</li>
                                )
                            }
                        )
                    }
                </ul>
            </>

        )
    }

}

export default ComponentA;