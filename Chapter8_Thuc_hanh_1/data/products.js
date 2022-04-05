const productArr = [];
for (let i = 0; i < 51; i++) {
    const productObject = {
        name: `San pham so ${i}`,
        image: 'https://kyma.vn/StoreData/images/Product/may-anh-fujifilm-x-t30-mark-ii-kit-xf18-55mm-f2-8-4-r-lm-ois-bac.jpg',
        description: `${i} Máy ảnh Fujifilm X-T30 Mark II Kit XF18-55mm F2.8-4 R LM OIS/ Bạc kết hợp khả năng chụp ảnh ấn tượng với thiết kế nhỏ gọn và tiện dụng. Tự hào có cảm biến X-Trans CMOS 4 26.1MP mới và bộ xử lý X-Processor 4, X-T30 II Kit XF18-55mm F2.8-4 R LM OIS/ Bạc cung cấp cho người mới bắt đầu, nghiệp dư nâng cao và chuyên nghiệp khả năng lấy nét tự động nhanh, nhận diện khuôn mặt mạnh mẽ.`,
        brand: 'Cannon',
        category: 'Electronics',
        price: 930.00,
        countInStock: 0,
        rating: 0,
        numberReviews: 0
    }
    productArr.push(productObject);
}

module.exports = productArr;