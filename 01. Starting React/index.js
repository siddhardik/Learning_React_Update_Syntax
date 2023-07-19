/* JavaScript */

/* 
const div=document.createElement('div');

const heading=document.createElement('h2');
heading.textContent = 'Hello World';


div.append(heading);

document.getElementById('root').append(div);
console.log("Javascript Element" , heading);

*/


/* React with Javascript */

// const reactHeading = React.createElement("h1" , {className:"head"},"Hello React");
// console.log("React Element" , reactHeading);

// ReactDOM.createRoot(document.getElementById("root")).render(reactHeading);


/* React With JSX */
const jsxHeading = (<h1> Hello React !</h1>);
ReactDOM.createRoot(document.getElementById("root")).render(jsxHeading);



 