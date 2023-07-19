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


/* React With JSX  and empty React Fragment <> </>*/
// const jsxHeading = (<>
// <h1 className="head"> Hello React !</h1>
// <p> This paragraph is used here </p>
// </>);

/* React With JSX and Full React Fragment </> */
const jsxHeading = (<React.Fragment>
<h1 className="head"> Hello React !</h1>
<p> This paragraph is used here </p>
</React.Fragment>);


//Looks like function but still Naming Convention should be First letter Capital 
function App(){
    return (
        <>
            <h1 className="head"> Hello React !</h1>
            <p> This paragraph is used here </p>
        </>
    )
}

// ReactDOM.createRoot(document.getElementById("root")).render(App());
ReactDOM.createRoot(document.getElementById("root")).render(<App/> );

// App()  Function    <App/> Component   but same result 


 