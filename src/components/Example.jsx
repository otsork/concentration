// This is an example component to explain the structure of React components
import React from 'react'

// export: means that the target of export (Main -class) is available outside of this file

// default: means that if this file is imported in another file without explicitly pointed which parts of if is imported by destructuring,
//          the import will target the variable, class etc. where the default is present, which in this case is Main -class.
//          Only 1 variable can be type export "default" in a file. When imported, as long as the file path is valid, the name of the import can be anything.

// class: means that a class component is being defined
// Main: is the name of this component, it could be anything.
// extends: means that this class inherits all the properties of another class, in this case React.Component
// React.Component: "React" points to a library/namespace and Component is a class inside this library/namespace.
//                  Basic javsacript object dot notation, e.g. "var myObject = { car: 'Saab' }", console.log(MyObject.car) will log "Saab" to console

export default class Main extends React.Component {

  // render function is the last necessary piece of a react component,
  // whatever is returned from render will be rendered when component is mounted to the dom
  render() {
    return <div>This text is inside an example component</div>
  }
}
