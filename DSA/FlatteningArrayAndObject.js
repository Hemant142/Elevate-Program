// Flattern a object

let obj = {
  name: "Hemant",
  lastName: "Yadav",
  address: {
    state: "Haryana",
    City: "Gurgaon",
       appt: {
      name: "Devilal",
      secotr: "9",
      houseno: "142",
    },
  },
};
console.log(obj);

function FlateenAnObject(obj, prefix = "") {
  let res = {};

  for (let key in obj) {
    if (typeof obj[key] == "object") {
      if (prefix) {
        let temp = FlateenAnObject(obj[key], prefix + "-" + key);
        res = { ...res, ...temp };
      } else {
        res = { ...res, ...FlateenAnObject(obj[key], key) };
      }
    } else {
      if (prefix) {
        res[prefix + "-" + key] = obj[key];
      } else {
        res[key] = obj[key];
      }
    }
  }

  return res;
}

console.log(FlateenAnObject(obj));
