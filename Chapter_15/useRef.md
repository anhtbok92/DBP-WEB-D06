### Ref là gì ?
- Trong React, ref là một thuộc tính của một tag hay một element
- ref cho phép truy cập đến DOM node hoặc React element đã được mount.
- Trong Javascript, chúng ta làm việc với DOM elements bằng cách gọi document.getElementById()
- Với ref trong React chúng ta không cần phải làm vậy. 
Thuộc tính ref sẽ tham chiếu đến chính xác element cần dùng.

Ví dụ:
- ref nhận vào 1 biến
```angular2html
<input type="text" ref={textInput} />
```

- ref nhận vào 1 function (unction này sẽ được chạy khi element được mount)
```angular2html
<button ref={(element) => console.log(element)}>Send</button>

// Kết quả
<button>send</button>
```

### Sử dụng ref để truy cập vào DOM nodes hoặc React Elements

- Ví dụ
```angular2html
import React, { useRef } from "react";
const CustomTextInput = () => {
  const textInput = useRef();
  focusTextInput = () => textInput.current.focus();
  return (
    <>
      <input type="text" ref={textInput} />
      <button onClick={focusTextInput}>Focus the text input</button>
    </>
  );
}
```

### (DOES NOT trigger re-render) Lưu trữ 1 variable có thể thay đổi mà không làm re-render lại component
- Tham khảo ví dụ 2-useRef-no-rerender

### Lấy ref trong 1 component con.

- Bài toán: Component cha, muốn đặt ref cho 1 DOM Node hoặc React Element trong component con
- Sử dụng forwardRef
- Tham khảo ví dụ 3
