import React from "react";
import ReactDOM from "react-dom/client";

//const heading = React.createElement("h1", { id:"heading" }, "Namaste React Using JSX🚀");

// Jsx => React.createElement() => Js Object => HTML Element

const jsxHeading = <h1 id="heading" className="header"> Namaste React Using JSX 🚀</h1>;

// Functional Components are Js functions, which returns React Element
const Title = () => (
    <h1 id="title" className="header"> 
        Namaste React Using Functional Component🚀
    </h1>
);

const number = 1000;

const ReactHeading = () => (
    <div id="container">
        <Title />
        <h2 className="heading">
            Component Composition😁
        </h2>
        <h3>{number}</h3>
        <h4>{50 * 50}</h4>
    </div>
)

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<ReactHeading />);