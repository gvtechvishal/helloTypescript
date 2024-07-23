/** we learn about union type.we also another type combining technique called "intersection" */

// let weight : number & string;

/** upper variable contain both type at same type but it's technically wrong or impssible we dont have
 * any variable conatin both number and string at same time.
 *
 * so we look more realistic examples
 */

type Draggable = {
  drag: () => void;
};

type Resizable = {
  resize: () => void;
};

type UIWidget = Draggable & Resizable;

// UIwidget call intersection type

let textBox: UIWidget = {
  drag: () => {},
  resize: () => {},
};
