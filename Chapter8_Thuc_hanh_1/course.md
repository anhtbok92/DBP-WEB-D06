## Thực hành cuối khóa

### 1. Công nghệ sử dụng
- Xây dựng ecommerce RestFull API
- Nodejs, expressjs, Mongoose, JWT...

### 2. Thiết kế database (model) 

- Tạo ra bảng gì?
- Các bảng có mối quan hệ với nhau như thế nào?

- Có 3 bảng: User, Product, Order

### 3. Thiết kế chi tiết

- Bảng User (user table) - Quản lý người dùng và admin
  - name: string, required
  - email: string, required
  - password: string, required
  - isAdmin: boolean, required
- Bảng Product (product table) - Quản lý sản phẩm
  - user: Ref: User (sản phẩm này được tạo bởi ai)
  - name: string, required
  - image: string, required
  - brand: string, required (thương hiệu)
  - category: string, required (loại sản phẩm)
  - description: string, required (mô tả về sản phẩm)
  - reviews: Object (Review về sản phẩm, ai là người review)
     - reviewSchema:
       - name: string, required
       - rating: number, required
       - comment: string, required
       - user: Ref: User
  - rating: number, required (Số rating trung bình)
  - numReviews: number, required (Số lượng review)
  - price: number, required (giá của sản phẩm)
  - countInStock: number, required (số lượng hàng trong kho)
- Bảng Order (order table) - Quản lý đơn hàng
  - user: Ref: User (sản phẩm được mua bỏi ai)
  - orderItems: Object (Thông tin đơn hàng)
    - orderItemsSchema:
      - name: string, required (tên sản phẩm)
      - qty: number, required (số lượng sản phẩm)
      - image: string, required (ảnh sản phẩm)
      - price: number, required (giá của sản phẩm)
      - product: Ref: Product, required (ref bảng sản phẩm)
  - shippingAddress: Object (Địa chỉ để ship đơn hàng)
      - address: string, required
      - city: string, required
      - postalCode: string, required
      - country: string, required
  - paymentResult: Object (kết quả phương thức thanh toán của đơn hàng)
      - id: string
      - status: string
      - update_time: string
      - email_address: string
  - paymentMethod: string, required
  - shippingPrice: number, required
  - totalPrice: number
  - isPaid: boolean, required

### 4. Tạo data mẫu (seeder)

- Hướng dẫn demo trên code


### 5. Thiết kế API

#### User API

1. Register a new user

```
// @desc: Register new user
// @route: POST /api/users
// @access: Public - return token
```

2. Login

```
// @desc: Login API
// @route: POST /api/users/login
// @access: Public - return token
```

3. Get profile user

```
// @desc: Get profile user
// @route: GET /api/users/profile
// @access: Private - Su dung token
```

4. Update user profile

```
// @desc: Update user profile
// @route: PUT /api/users/profile
// @access: Private
```

5. Get all users

```
// @desc: Get all users
// @route: GET /api/users
// @access: Private/admin
```

6. Delete user

```
// @desc: Delete user
// @route: DELETE /api/users/:id
// @access: Private/admin
```

7. Get user by ID

```
// @desc: Get user by ID
// @route: GET /api/users/:id
// @access: Private/admin
```

8. Update user by ID

```
// @desc: Update user by ID
// @route: PUT /api/users/:id
// @access: Private/admin
```