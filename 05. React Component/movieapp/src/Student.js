import { Component } from "react";


// ClassBased Component with Props 

/*
class Student extends Component {

    render(){
        
        // Destructuring Use 
        const {marks,section} = this.props;
        // We will use name directly 
        return(
            <>
            <h1>Hello , {this.props.name} , Section {section} Marks Obtained {marks} </h1>
            <p>NAME IS Rendered ! </p>
            </>
            
        )
    }
}

*/


// FunctionBased Component with Props 

function Student(props){
     // Destructuring Use 
     const {marks,section} = props;
     // We will use name directly 
     return(
         <>
         <h1>Hello , {props.name} , Section {section} Marks Obtained {marks} </h1>
         <p>NAME IS Rendered ! </p>
         </>
         
     )

}


export default Student;

//Props cannot be modified 