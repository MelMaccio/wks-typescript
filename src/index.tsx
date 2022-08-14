import React, { useState } from "react";
import ReactDOM from "react-dom";
import './index.css';


//create an interface to define type of props data
interface AppProps {
    title : string
}
//create the component, passing title as prop
function App({title} : AppProps) : JSX.Element {
    const [counter, setCounter] = useState(0)

    return(
        <div>
            <h3>Henry Workshop - {title}</h3>
            <hr />
            <button onClick={()=>setCounter(counter + 1)}>Increment</button>
            <button onClick={()=>setCounter(counter - 1)}>Decrement</button>
            <br />
            <span>{counter}</span>
        </div>
    ) 
}
//render the component
ReactDOM.render(<App title="Typescript"/>, document.querySelector('#root'));