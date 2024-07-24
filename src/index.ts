/** How to work unknown type..
 *
 * we know "any" type and avoid as a possible.
 *
 * let consider where we converting javascript to typescript code and
 * we have situation where we use any type.
 *
 * see the below example
 */

function render(document: any) {
  // we code like
  document.move();
  document.fly();
  document.whateverWeWant();
  // here not type cheking..
  /** if our program is run document not contain any of the method
   * our program crash so insted applying "any" type we use "unknown".. */
}

function render1(document: unknown) {
  // we use type narrowing

  if (document instanceof wordDocument) {
    document.move();
  }
  document.fly();
  document.whateverWeWant();
}
