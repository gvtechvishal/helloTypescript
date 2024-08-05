/** Decorators:-  Decorators in TypeScript are a special kind of declaration that can be attached to a class, method, accessor, property, or parameter. Decorators are used to modify or enhance these elements. They are a feature proposed for JavaScript and are available as an experimental feature in TypeScript. 
 * 
 * Types of Decorators
1) Class Decorators
2) Method Decorators
3) Accessor Decorators
4) Property Decorators
5) Parameter Decorators
 */

function component(
  target: typeof ProfileComponent
): void | typeof ProfileComponent {
  throw new Error("Function not implemented.");
}

@component
class ProfileComponent {}
