import React, {useEffect, useRef} from 'react';
import InputComponent from './InputComponent'

const UseRefForwardRef = () => {
    const inputRef = useRef(null);

    useEffect(() => {
        console.log("inputRef.current: ", inputRef.current);
    }, []);

    return (
        <div>
            <InputComponent ref={inputRef} />
        </div>
    )
}

export default UseRefForwardRef;