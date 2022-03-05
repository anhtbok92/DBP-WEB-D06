// export variable
const AUTHOR_COPY_RIGHT = 'Nguyen Tuan Anh'

// export function
const sum = function (a, b) {
    return a + b;
}

// export class
var Person = class {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    showInfoAuthor() {
        console.log('name=' + this.name + ', ' + 'age=' + this.age);
    }
}

var AuthorInfo = {
    Person: Person,
    sum: sum,
    AuthorCopyRight: AUTHOR_COPY_RIGHT
}

module.exports = AuthorInfo;