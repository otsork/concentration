// This is an example component to explain the structure of React components

// We import React library from 'react' module
import React from 'react'

/*
  export: means that the target of export (Example -class) is available outside of this file
  default: means that if this file is imported in another file without explicitly pointed which parts of if is imported by destructuring,
          the import will target the variable, class etc. where the default is present, which in this case is Example -class.
          Only 1 variable can be type export "default" in a file.
          When imported, as long as the file path is valid, the name of the import can be anything.

  class: means that a class is being defined, we are creating a class component.
  Example: is the name of this component, it could be anything.
  extends: means that this class inherits all the properties of another class, in this case React.Component
  React.Component: "React" points to a library/namespace and Component is a class inside this library/namespace.
                    Basic javascript object dot notation, for example
                    "var myObject = { car: 'Saab' }", console.log(MyObject.car) will log "Saab" to console
*/
export default class Example extends React.Component {
  
  // logCar outputs 2 lines into the console, "Saab" and "9-3"
  logCar() {
    /*
      "this" keyword means that it targets this class, we could write "Example.props.prop2.make" as well,
      but "this" is much easier than always specifying the name of the class
    */
    console.log(this.props.prop2.make)
    console.log(this.props.prop2.model) 
  }

  // render function is the only mandatory part of a react component these days, (in the past each class needed to have a constructor method)
  // whatever is returned from render will be rendered when component is mounted to the dom
  render() {

    // once again, calling a logCar property here or rather a method of a *this class (*Example)
    this.logCar()

    /*
      <> component is a "ghost wrapper", its not visible in the dom nor the website,
      but it wraps both of the <p> elements, because in React you must only have 1 top level component.
      instead of <> we could have wrapped the <p> elements with <div> elements, which is the commonly used fashion,
      but we dont want an extra div that has no real purpose.
      <> component can not have any css styles or properties/attributes, it simply acts as a wrapper making 2 or more elements seem like 1 to React.
      <> is a shorthand of <React.Fragment>
    */
    return (
      <>
        <p>This text is inside an example component</p>
        <p>This text is inside an example component</p>
      </>
    )

  }
}
