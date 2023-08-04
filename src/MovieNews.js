import React from "react";
import { createElement } from "react";
import myText from "./Movies";
//const myTitle = <h1>MovieNews Using Function JSX </h1>;
/*const myTitle = React.createElement(
  "h1",
  {},
  "Welcome to MovieNews using React.createElement in Function Component"
);*/

function MovieNews() {
  return myText;
}

//const myTitle = <h1>MovieNews Using Class JSX </h1>;
/*const myTitle = React.createElement(
  "h1",
  {},
  "Welcome to Movienews Using React.createElement"
);
class MovieNews extends React.Component {
  render() { 
    return myTitle;
  }
}*/
export default MovieNews;
