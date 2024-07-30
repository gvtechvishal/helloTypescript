/** Abstract classes and methods
 *
 * Consider this example where we bulild simple paint app..that allow to draw circle,rectangle,triangle on canvas.
 *
 * So every shape have common properties like color,size,position
 *
 */

abstract class Shape {
  constructor(public color: string) {}
  // define render method

  abstract render(): void;
  // at this point we dont know how to render a shape because rendering algorithm depend on type of shape..
}

class Circle extends Shape {
  constructor(public radius: number, color: string) {
    super(color);
  }

  // this method for draw circle
  override render(): void {
    console.log("Rendering a circle");
  }
}

/** one problem in this implementation we create Shape objects */

// let shape = new Shape("red");
// shape.render();

/** This make not any sense render a shape without what type of shape right..because shape is not real things like a circle.
 *  That why we use Abstract classes and methods...it is stop us being able to creating a instance of shape class we mark the class as
 * abstract..
 *
 * we use to "abstract" keyword for telling the compiler this is class shape is abstract.  not ready so another class like circle extended..
 *
 * abstract class have abstract methods also that are methods that no implementation.. so we prefix the method with abstract
 */
