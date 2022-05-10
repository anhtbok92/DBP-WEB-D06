### React context API

#### 1. Đặt vấn đề
- Có một loại dữ liệu là 1 số với giá trị là 10.
- Cần dữ liệu này trong component `Red` và `Green`.
- Component Green là con của component `Blue`, và `Blue` lại là con của component `Red`.
- Vì vậy sẽ cần phải gửi dữ liệu từ `Red` đến `Blue` chỉ để gửi nó tới `Green`.

![img.png](img.png)

- Code như sau

```angular2svg
const Green = (props) => (
  <div className="green">{props.number}</div>
)

const Blue = (props) => (
  <div className="blue">
    <Green number={props.number} />
  </div>
)
 
class Red extends Component {
  state = {
    number : 10
  }
  render() {
    return  <div className="red">
      {this.state.number}
      <Blue number={this.state.number} />
    </div>
  }
}
```

- Chúng ta đã gửi data xuống cho component `Blue` chỉ để truyền tiếp nó xuống cho Green.
- Component `Blue` không sử dụng data number

Giải pháp là : Sử dụng context API

#### 2. Context API

- Định nghĩa :

```angular2svg
Context cung cấp cho bạn một cách để truyền dữ liệu xuống cây component mà không cần phải truyền props xuống ở tất cả các cấp component.
```

- Sử dụng khi nào ?
    + Dữ liêụ là cần thiết ở nhiều nơi: dữ liệu cần được sử dụng bởi nhiều component như chủ đề, người dùng, giỏ hàng...
    + Truyền dữ liệu qua nhiều component: sử dụng context trong trường hợp này là tốt hơn khi bạn muốn chuyển 1 giá trị props thông qua nhiều component.
    
- Các bước xây dựng context API
    + Bước 1 - <b>context</b> đối tượng context là một đối tượng lưu giữ giá trị context hiện tại và có thể được đăng ký.
    + Bước 2 - <b>provider</b> là một component của React cung cấp giá trị, nó lấy từ đối tượng context.
    + Bước 3 - <b>consumer</b>: là một component có thể sử dụng giá trị của provider và có thể hiển thị giá trị.
    
- Ví dụ đơn giản
    + Bước 1: Khởi tạo context - Tạo file `theme.js`
    ```angular2svg
        // theme.js
        import React from 'react';
        const ThemeContext = React.createContext('light');
        export default ThemeContext;
    ```
        + gọi createContext() và truyền vào cho nó 1 tham số đầu vào
        + tham số đầu vào là giá trị mặc định của context
        + Giá trị mặc định `light` sẽ được sử dụng nếu không khai báo Provider trong bước 2

    + Bước 2: Khai báo provider - Tạo file `sample.js`
    ```angular2svg
        // sample.js
        import React from 'react';
        import Theme from './theme';
        const Sample = () => (
            <Theme.Provider value='dark'>
            // declare consumer
            </Theme.Provider>
        );
        export default Sample;
    ```
  
        + Khai báo một functional component bình thường và cũng import đối tượng `context Theme`
        + Khai báo Theme.Provider để tạo provider

    + Bước 3: Khai báo Consumer - Cập nhật file `sample.js`
    ```angular2svg
        // sample.js
        import React from 'react';
        import Theme from './theme';
        const Sample = () => (
            <Theme.Provider value='dark'>
                <Theme.Consumer>
                    {theme => <div>Our theme is:  {theme}</div>}  
                </Theme.Consumer>
            </Theme.Provider>
        );
        export default Sample;
    ```
  
    + Bước 4: Tách component để sử dụng context `theme` common
    ```angular2svg
        // ThemedButton.js
        import Theme from 'theme.js';
        const ThemedButton = (props) => (
            <Theme.Consumer>
                {theme => <button { …props }>button with them: {theme}</button>}
            </Theme.Consumer>
        );
        export default ThemedButton
    ```
  
    ```angular2svg
        // sample.js
        import React from 'react';
        import Theme from './theme';
        import ThemedButton from './ThemedButton';
        const Sample = () => (
            <Theme.Provider value='dark'>
                <ThemedButton />
            </Theme.Provider>
        );
        export default Sample;
    ```
    
- Dynamic Context
    + Nếu ta muốn thay đổi giá trị provider hãy sử dụng Dynamic Context
    + Phương pháp:
        + Đặt Provider vào bên trong một component
        + Để giá trị của nó phụ thuộc vào state của component
            ```angular2svg
                // DynamicContext.js
                class DynamicContext extends React.Component {
                    constructor(props) {
                        super(props);
                        this.state = {
                            theme: 'dark'
                        };
                    }
                    render() {
                        return (
                        <ThemeContext.Provider value={this.state.theme}>
                            <ThemedButton />
                        </ThemeContext.Provider>
                        );
                    }
                }
            ```