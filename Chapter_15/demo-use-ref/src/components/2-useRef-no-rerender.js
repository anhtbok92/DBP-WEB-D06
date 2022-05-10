
import React, {useRef, useState} from "react";
const UseRefNoReRender = () => {
    const [message, setMessage] = useState('');
    const clicked = useRef(0);

    const sendMessage = () => {
        if (clicked.current === 3) {
            alert('Limited');
        }
        clicked.current += 1;
    }

    return (
        <>
           <input name={'message'} value={message} onChange={(e) => setMessage(e.target.value)} />
           <button onClick={sendMessage}>Submit</button>
        </>
    )
}

export default UseRefNoReRender;