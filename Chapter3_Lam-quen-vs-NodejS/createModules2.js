var createModules = require('./createModules');

// console.log('This is modules created in createModules: ', createModules);
//
// console.log('this is current modules', module);

const myDateTime = createModules.getMyDateTime();
console.log('my-date-time', myDateTime);

const myDir = createModules.getDirName();
console.log('my-dir', myDir);

const myAge = createModules.myAge;
console.log('my-age', myAge);
