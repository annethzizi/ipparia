function flattenObject(obj, prefix = '') {
  let flatObject = {};
  for (let key in obj) {
    if (typeof obj[key] === 'object' && obj[key] !== null) {
      Object.assign(flatObject, flattenObject(obj[key], `${prefix}${key}.`));
    } else {
      flatObject[`${prefix}${key}`] = obj[key];
    }
  }
  return flatObject;
}

let nestedObject = {
  "name": "John",
  "age": 30,
  "address": {
    "city": "New York",
    "zip": "10001"
  }
};

let flattenedObject = flattenObject(nestedObject);
console.log(flattenedObject);
