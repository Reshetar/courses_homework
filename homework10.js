// Task 1
let arr = ["Tom", "Sam", "Ray", "Bob"];
let [ x, y, m, ...z ] = arr;
console.log(x);
console.log(y);
console.log(z);


// Task 2
let data = {
  names: ["Sam", "Tom", "Ray", "Bob"],
  ages: [20, 24, 22, 26],
};
let { names: [, name2, , name4], ages: [, age2, , age4] } = data;
console.log(name2); // "Tom"
console.log(age2); // 24
console.log(name4); // "Bob"
console.log(age4); // 26

// Task 3
const mul = (...args) => {
  let sum = 0;
  for (let index = 0; index < args.length; index++) {
    if (typeof args[index] == "number") {
      sum += args[index];
    }
  }
  return sum;
}
console.log(mul(1, "str", 2, 3, true)); // 6
console.log(mul(null, "str", false, true)); // 0

// Task 4
let server = {
  data: 0,
  convertToString: function (callback) {
     callback( () => {
        return this.data + "";
     });
  }
};
let client = {
  server: server,
  result: "",
  calc: function (data) {
     this.server.data = data;
     this.server.convertToString(this.notification());
  },
  notification: function () {
     return ((callback) => {
        this.result = callback();
     });
  }
};
client.calc(123);
console.log(client.result); // "123"
console.log(typeof client.result); // "string"


// Task 5
const mapBuilder = (keysArray, valuesArrays) => {
  const mapArray = new Map();
  for (let index = 0; index < keysArray.length; index++) {
    mapArray.set(keysArray[index], valuesArrays[index]);
  }
  return mapArray;
};

let keys = [1, 2, 3, 4];
let values = ["div", "span", "b", "i"];
let map = mapBuilder(keys, values);
console.log(map);
console.log(map.size); // 4
console.log(map.get(2)); // "span"
