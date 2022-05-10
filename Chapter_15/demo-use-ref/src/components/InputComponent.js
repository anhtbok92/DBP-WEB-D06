import React, { forwardRef } from 'react';
const InputComponent = (props, ref) => {
    return (
        <input type={'email'} name={'email'} ref={ref} />
    )
};

export default forwardRef(InputComponent);

