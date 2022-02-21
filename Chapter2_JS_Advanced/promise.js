// 1. khoi tao promise
var promise_pending = new Promise((resolve, reject) => {

});

console.log('1. Trang Thai promise bau dau: ', promise_pending);

// 2. promise resolve
var promise_fullfilled = new Promise((resolve, reject) => {
   resolve();
});

console.log('2. Trang Thai promise fullfilled: ', promise_fullfilled);

// 3. Promie reject
var promise_rejected = new Promise((resolve, reject) => {
    reject('Xay ra loi login !!!');
});

console.log('3. Trang Thai promise rejected: ', promise_rejected);


// 4. promise resolve with value
var promise_resolved_with_value = new Promise((resolve, reject) => {
    resolve(true);
});

console.log('4. Trang Thai promise resolve with value: ', promise_resolved_with_value);

// 5. Promise method
var promise_method = new Promise((resolve, reject) => {
    reject();
});

promise_method
    .then(function () {
        console.log('5. Promse method when resolved called: ', 'success');
    })
    .catch(function () {
        console.log('5. Promse method when rejected called: ', 'failure');
    })
    .finally(function () {
        console.log('5. Promse method when done: ', 'done');
    });

// 5. Promise method
var promise_method2 = new Promise((resolve, reject) => {
    const arrayCourse = [
        {
            "Course name": "Lap trinh nodejs",
            "Author": "Nguyen Tuan Anh"
        },
        {
            "Course name": "Lap trinh react",
            "Author": "Nguyen Tuan Anh 2"
        }
    ]
    resolve(arrayCourse);
});

promise_method2
    .then(function (resultData) {
        console.log('6. Promse method when resolved called: ', resultData);
    })
    .catch(function () {
        console.log('6. Promse method when rejected called: ', 'failure');
    })
    .finally(function () {
        console.log('6. Promse method when done: ', 'done');
    });