import React from 'react';
import useCallApi from "../hooks/useCallApi";

const UserCard = () => {
    const url = 'https://5f3fda1244212d0016fed4db.mockapi.io/users/1';
    const { isLoading, data } = useCallApi(url);
    return (
        <>
            {isLoading && (
                <div>Loading...</div>
            )}
            {data && (
                <div>
                    <h2>Thông tin chi tiết của user</h2>
                    <p>Họ Tên: {data.fullName}</p>
                    <p>Tuổi: {data.age}</p>
                    <p>Địa chỉ: {data.address}</p>
                    <p>Số điện thoại: {data.phone}</p>
                </div>
            )}
        </>
    );
}

export default UserCard;