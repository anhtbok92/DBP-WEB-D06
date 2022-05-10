### Hiểu khái niệm Reducer là gì ?
- reducer là 1 hàm có 2 tham số : state và action
- Hàm này có nhiệm vụ truyền vào state hiện tại + hành động -> trả về 1 state mới
- Tưởng tượng : reducer là 1 bộ chuyển đổi

```angular2html
(state, action) => newState
```

### useReducer hook trong react
- useReducer là 1 bản nâng cao của của hook useState
- Sử dụng trong các trường hợp: 
  - state của component phức tạp
  - có nhiều action thay đổi state đó (phải dùng nhiều useState hoặc useState cho object nhiều key hoặc nested object...)

- Khởi tạo

```angular2html
const [state, dispatch] = useReducer(reducer, initialArg, init);
```
+ state: giá trị của state (variable, object, array...)
+ dispatch: hàm được gọi mỗi khi có action từ user.
+ reducer: là 1 hàm -> bộ chuyển đổi state
+ initialArg: giá trị của state ban đầu
+ init : -> cho phép xử lý logic ngoài hàm reducer (ít khi sử dụng)

### Example
- Counter: Xem ví dụ 1
- TODO Add, Remove People : Xem ví dụ 2