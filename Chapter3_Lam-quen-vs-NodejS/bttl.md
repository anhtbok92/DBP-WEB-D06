### Bài 1: intro
- Viết 1 chương trình bằng nodejs in ra các số chẵn duy nhất trong mảng sau
- [1, 2, 3, 4, 5, 6, 6, 7, 7, 8, 8, 9, 10];

### Bài 2: global
- Tạo 1 file json trong project có nội dung sau:
    + Tên: Tên học viên (name)
    + Tuổi: Tuổi học viên (age)
    + Công việc hiện tại: công việc của học viên (work)
    + Giới tính: (gender)
- In ra nội dung file json trong cmd bằng cách sử dụng nodejs 

### Bài 3: modules
- Cho 1 file json có nội dung sau
  { name: 'tuananh', children: ['com', 'ngo'], age: '31' }
- Sử dụng queryString để convert sang chuỗi sau
  'name=tuananh&children=com&children=ngo&age=31'

### Bài 4: create module
- Tạo 1 module trả về ngày tháng năm sinh của bản thân dạng : yyyy-mm-dd
- Tạo 1 file khác, sử dụng module trênvà Hiển thị ngày tháng năm sinh dạng: dd/mm/yyyy

### Bài 5: http
- Tạo 1 trang web nếu truy cập vào đường dẫn http://localhost:5000/index
  - Hiển thị nội dung : `đây là trang chủ`
- Nếu truy cập vào đường dẫn: http://localhost:5000/about
  - Hiển thị nội dung: là thông tin cá nhân của bản thân.
- Nếu truy cập khác 2 đường dẫn index và about
  - Hiển thị nội dung: `Đường dẫn này không tồn tại`