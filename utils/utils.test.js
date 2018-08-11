const chai    = require("chai"),
      expect  = chai.expect,

      utils = require("./utils.js");



it("should add two numbers", () => {
  const result = utils.add(42, 11);

  expect(result)
    .to.equal(53);
});


it("should add two numbers asynchronously", (done) => {
  utils.asyncAdd(4, 6, (result) => {
    expect(result)
      .to.be.a("number")
      .to.equal(10);
    done();
  });
});


it("should square a number", () => {
  const result = utils.square(5);

  expect(result)
    .to.equal(25);
});


it("should square a number asynchronously", (done) => {
  utils.asyncSquare(6)
    .then((result) => {
      expect(result)
        .to.be.a("number")
        .to.equal(36);
      done();
    });
});


it("should set firstName and lastName properties", () => {
  const result = utils.setName({
    age: 34,
    location: "Chicago"
  }, "Jerry Mandering");

  expect(result)
    .to.be.an("object")
    .to.include({firstName: "Jerry"})
    .to.include({lastName: "Mandering"})
    .to.deep.equal({
      age: 34,
      location: "Chicago",
      firstName: "Jerry",
      lastName: "Mandering"
    });

});
