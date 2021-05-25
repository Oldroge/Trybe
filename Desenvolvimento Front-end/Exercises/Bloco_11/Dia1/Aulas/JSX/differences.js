//With the JSX the code gets more readble.
const element = <h1>Hello, world!</h1>;

//We can do the elements HTML without the JSX and dont have any rules about use or dont, but with JSX it get more legible, below we can see the same element:
const element = React.createElement("h1", null, "Hello, world")

//Imagine an intire application with this way to code.