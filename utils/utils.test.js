const utils = require("./utils.js");


it("should add two numbers", () => {
  const result = utils.add(42, 11);

  if(result !== 53) {
    throw new Error(`Expected 53, but got ${result}`);
  }
});

it("should square a number", () => {
  const result = utils.square(5);

  if(result !== 25) {
    throw new Error(`Expected 25, but got ${result}`);
  }
});
