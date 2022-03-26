const bcrypt = require('bcryptjs');

const users = [
    {
        name: 'Tuan Anh Admin',
        email: 'admin@example.com',
        password: bcrypt.hashSync('12345678', 10),
        isAdmin: true
    },
    {
        name: 'Phan Van Thin',
        email: 'thin@example.com',
        password: bcrypt.hashSync('12345678', 10),
        isAdmin: false
    },
    {
        name: 'Huan',
        email: 'huan@example.com',
        password: bcrypt.hashSync('12345678', 10),
        isAdmin: false
    },
    {
        name: 'Long',
        email: 'long@example.com',
        password: bcrypt.hashSync('12345678', 10),
        isAdmin: false
    }
]

module.exports = users;