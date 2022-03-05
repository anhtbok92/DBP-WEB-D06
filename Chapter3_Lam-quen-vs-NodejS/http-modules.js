const http = require('http');
const AuthorInfo = {
    name: 'Nguyễn Tuấn Anh',
    age: 31
}
http.createServer(function (req, res) {
    if (req.url === '/index') {
        res.write('Đây là trang chủ');
    } else if (req.url === '/about') {
        res.write(`Thông tin cá nhân tên: ${AuthorInfo.name}, tuổi : ${AuthorInfo.age}`);
    } else {
        res.write('Trang web bạn tìm kiếm không tồn tại')
    }
    res.end();
}).listen(8080); //the server object listens on port 8080