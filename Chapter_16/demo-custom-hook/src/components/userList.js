import React from 'react';
import useCallApi from "../hooks/useCallApi";

const UserList = () => {
    const url = 'https://5f3fda1244212d0016fed4db.mockapi.io/users';
    const { isLoading, data } = useCallApi(url);
    return (
        <>
            {isLoading && (
                <div>Loading...</div>
            )}
            <ul>
                {data && data.map((user, index) => {
                    return (
                        <li key={index}>
                            <p>Họ và tên: {user.fullName}</p>
                            <p>Số điện thoại: {user.phone}</p>
                        </li>
                    )
                })}
            </ul>
        </>
    )
}

export default UserList;