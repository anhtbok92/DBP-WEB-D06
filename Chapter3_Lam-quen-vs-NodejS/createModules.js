/*
* Cách tạo 1 modules trong nodejs
*   - Có 2 cách:
*       + Sử dụng module.exports
*       + Sử dụng exports.
* */

// Tạo 1 modules lấy ra ngày tháng hiện tại của hệ thống
// cách 1
module.exports.getMyDateTime = function () {
    return Date();
}

// Tạo 1 modules lấy đường dẫn của file đang thực thi code
// cách 2
exports.getDirName = function () {
    return __dirname;
}

// Ngoài ra export ra 1 variable
const MY_AGE = 31;
exports.myAge = MY_AGE;

// console.log('createModules-current modules: ', module);