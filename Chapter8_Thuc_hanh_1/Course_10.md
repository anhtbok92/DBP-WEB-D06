#### Product API

1. Get all products

```
// @desc: Get all products
// @route: GET /api/products
// @access: Public
```

2. Create a product

```
// @desc: Create a product
// @route: POST /api/products
// @access: Private/admin
```

3. Create Review for product

```
// @desc: Create Review for product
// @route: POST /api/products/:id/reviews
// @access: Private
```

4. Get product by ID

```
// @desc: Get product by ID
// @route: GET /api/products/:id
// @access: Public
```

5. Delete product by ID

```
// @desc: Delete product by ID
// @route: Delete /api/products/:id
// @access: Private/admin
```

6. Update product by ID

```
// @desc: Update product by ID
// @route: PUT /api/products/:id
// @access: Private/admin
```

7. Get top products by ID

```
// @desc: Get top products by ID
// @route: GET /api/products/top
// @access: Public
```

#### Order API

1. Create new order

```
// @desc: Create new order
// @route: POST /api/orders
// @access: Private
```

2. Get all orders (toàn hệ thống)

```
// @desc: Get all orders
// @route: GET /api/orders
// @access: Private/Admin
```

3. Get my order

```
// @desc: Get my order
// @route: GET /api/orders/myorders
// @access: Private/Not admin
```

4. Get order by id (chỉ lấy đơn hàng của chính chủ)

```
// @desc: Get order by id
// @route: GET /api/orders/:id
// @access: Private
```

5. Update orders (cập nhật đơn hàng đã giao cho khách hàng hay chưa?)

```
// @desc: Update orders
// @route: PUT /api/orders/:id
// @access: Private/Admin
```

6. Paypal API (hỗ trợ thanh toán qua cổng API paypal)