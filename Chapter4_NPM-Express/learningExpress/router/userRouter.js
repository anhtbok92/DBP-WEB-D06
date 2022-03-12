const express = require('express');
const userRouter = express.Router();

// CRUD with user
// https://www.npmjs.com/package/joi
// hoặc sử dụng https://express-validator.github.io/docs/
const users = [
    {
        id: '1',
        age: 18, // chỉ nhận là số từ 1-200, không nhận số âm
        email: 'victory1080@gmail.com', // chỉ được nhập format là email, sai format thì báo lỗi không insert vào mảng và không trả về mảng
        name: 'Nguyen Tuan Anh',
        gender: 0 // 0: name, 1: nữ, 2: Other. Chỉ được nhập vào 0, 1 và 2
    },
    {
        id: '2',
        age: 28, // chỉ nhận là số từ 1-200, không nhận số âm
        email: 'victory1080@gmail.com2', // chỉ được nhập format là email, sai format thì báo lỗi không insert vào mảng và không trả về mảng
        name: 'Nguyen Tuan Anh2 ',
        gender: 1 // 0: name, 1: nữ, 2: Other. Chỉ được nhập vào 0, 1 và 2
    }
]
// BTVN
// handling manga /api/user
// 1. GET localhost:3002/api/user -> Trả về danh sách user
// 2. GET by ID: localhost:3002/api/user/:id -> Trả về danh sách user
    // + ví dụ : localhost:3002/api/user/1
// 3. POST localhost:3002/api/user { id, name: }  -> Thêm user mới vào array (POSTMAN) và trả về mảng user mới
// 4. PUT localhost:3002/api/user  {id, name: } -> Cập nhật tên 1 user nào đó
    // - validate nếu ID không tồn tại
// 5. DELETE localhost:3002/api/user  { id } -> Xóa 1 user ra khỏi mảng
    // - validate nếu ID không tồn tại

module.exports = userRouter;