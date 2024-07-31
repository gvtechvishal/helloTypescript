/** Generic Constraints:--
 *
 * Some time we need to constraints the generic type of arguments
 *
 */

function echo<T>(value: T): T {
  return value;
}
// we can pass any type of value here like

echo(1);
echo("1");
echo(true);

/** we constrant or limit the type of objects we can pass in functions. */

function echo2<T extends number | string>(value: T): T {
  return value;
}

// we only pass string or number here
echo2(2);
echo2("2");
// below line give the error
// echo2(true);

//we also pass shape of obeject like

function echo3<T extends { name: string }>(value: T): T {
  return value;
}

echo3({ name: "vishal" });

// we also use interface for this like

interface Person {
  name: string;
}

function echo4<T extends Person>(value: T): T {
  return value;
}

//we also constraint by class as well as like

class Person1 {
  constructor(public name: string) {}
}

class customer extends Person1 {}

// now we can pass any instance of person or any classes that derived from person

function echo5<T extends Person1>(value: T): T {
  return value;
}

echo5(new Person1("vishal"));
echo5(new customer("vishal"));
