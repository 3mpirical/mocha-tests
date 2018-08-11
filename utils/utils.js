

const utils = {

  add: (a,b) => {
    return a + b;
  },

  asyncAdd: (a, b, callback) => {
    setTimeout(() => {
      callback(a + b);
    }, 300);
  },

  square: (x) => {
    return x * x;
  },

  asyncSquare: (x) => {
    return new Promise( (resolve, reject) => {
      setTimeout(() => {
        resolve(x * x);
      }, 300);
    });
  },

  setName: (userObj, fullName) => {
    if(typeof fullName !== "string") {
      throw new Error("fullName argument is not a string");
    } else{
      let fullNameArr = fullName.split(" ");

      userObj.firstName = fullNameArr[0];
      userObj.lastName = fullNameArr[1];

      return userObj;
    }
  }
};

// console.log( JSON.stringify(utils.setName({}, "Jerry Mandering"), null, 2) );

module.exports = utils;
