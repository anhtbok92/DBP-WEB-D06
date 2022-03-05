var authorModules = require('./export-modules-1');

const person = new authorModules.Person('Nguyen Tuan Anh', 31);
person.showInfoAuthor();

const total = authorModules.sum(10, 111);
console.log('total-', total);

var authorCopyRight = authorModules.AuthorCopyRight;
console.log('authorCopyRight-', authorCopyRight);