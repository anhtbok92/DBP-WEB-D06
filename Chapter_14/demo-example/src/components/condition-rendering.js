import React, {useEffect, useState} from "react";

const API_URL = 'https://api.github.com/users/anhtbok92';

const ConditionRendering = () => {
    const [user, setUser] = useState('default user');
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        // Tuong duong voi componentDidMount
        // Thuc hien call API
        console.log('calling API.');
        fetch(API_URL)
            .then((response) => {
                console.log('response from github:', response);
                if (response.status === 200) {
                    return response.json();
                } else {
                    setIsLoading(false);
                    setIsError(true);
                    throw new Error(response.statusText);
                }
            }).then((user) => {
                console.log('user info', user);
                const { login } = user;
                setUser(login);
                setIsLoading(false);
            }).catch((error) => {
                setIsLoading(false);
                setIsError(true);
                console.log('Co loi xay ra', error);
            })
    }, []);

    // if (isLoading) {
    //     return (
    //         <div>
    //             <h1>Loading data, please wait....</h1>
    //         </div>
    //     )
    // }

    // if (isError) {
    //     return (
    //         <div>
    //             <h1>Error Page, please try again !</h1>
    //         </div>
    //     )
    // }

    return (
        <>
            <h1>{!isError && !isLoading && user}</h1>
            {isLoading ? <h1>Loading data, please wait....</h1> : null}
            {isError && <h1>Error Page, please try again !</h1>}
        </>
    )
}

export default ConditionRendering;