/** Parameterize decorators */

type ComponentOptions = {
  selector: string;
};

function Component(options: ComponentOptions) {
  return (constructor: Function) => {
    console.log("Component decorator called");
    constructor.prototype.options = options;
    constructor.prototype.uniqueId = Date.now();
    constructor.prototype.insertInDom = () => {
      console.log("Inserting the component in the DOM");
    };
  };
}

@Component({ selector: "#my-profile" })
class ProfileComponent {}
