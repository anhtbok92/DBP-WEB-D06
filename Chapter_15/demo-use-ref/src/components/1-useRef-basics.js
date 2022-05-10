import React, {useEffect, useRef} from 'react';

const UseRefBasics = () => {

    const refInput = useRef(null);

    const handleSubmitData = (e) => {
        e.preventDefault();
        console.log('click submitted');
        console.log(refInput.current.value);
    }

    useEffect(() => {
        console.log('useEffect called');
        console.log('refInput-element: ', refInput.current);
        refInput.current.focus();
    });

    return (
        <>
            <form onSubmit={handleSubmitData}>
                <div>
                    <input name='username' type='text' ref={refInput} />
                </div>
                <button type='submit'>Submit</button>
            </form>
        </>
    )
}

export default UseRefBasics;