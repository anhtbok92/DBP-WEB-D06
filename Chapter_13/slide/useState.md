### 1. useState trong React

```angular2svg
const [nameState, funcUpdate] = React.useState (defaultState)
```

- nameState: đây là gía trị mặc định của state.
- funcUpdate: function dùng để cập nhật state.
  + muốn cập nhật giá trị của state mình chỉ cần gọi funcUpdate('giá trị mới của state').
- defaultState: giá trị mặc định của state khi được khởi tạo lần đầu.

### 2. Example with useState

- ErrorExample
- useStateBasic
- useStateArray
- useStateObject
- useStateCounter