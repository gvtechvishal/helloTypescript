/** Class decorators */

function Component(constructor: Function) {
  console.log("Component decorator called");

  // add extra property to ProfileComponent class via prototype
  constructor.prototype.uniqueId = Date.now();
  constructor.prototype.insertInDom = () => {
    console.log("Inserting the component in the DOM");
  };
}

@Component
class ProfileComponent {}
