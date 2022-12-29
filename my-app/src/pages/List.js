import React from "react";

const User = ({userData}) => {
    return(
        <tr>
            <td>{userData.name}</td>
            <td>{userData.email}</td>
        </tr>
    )
}

const UserList = () => {
    const users = [
        {email: 'park@gmail.com', name: '박현준'},
        {email: 'kim@gmail.com', name: '김호현'},
        {email: 'ku@gmail.com', name: '구윤하'},
        {email: 'ha@gmail.com', name: '이하린'}
    ];

    return (
        <table>
            <thead>
                <tr>
                    <th>이름</th>
                    <th>이메일</th>
                </tr>
            </thead>
            <tbody>
                {users.map(user => <User userData={user} />)}
            </tbody>
        </table>
    )
}

export default UserList;