import React, { useState } from "react";

const FormReact = () => {
    // const [name, setName] = useState('');
    // const [email, setEmail] = useState('');
    // const [age, setAge] = useState('');
    const [memberInfo, setMemberInfo] = useState({
        name: 'Nguyen Van A',
        email: '',
        age: ''
    });
    const [members, setMembers] = useState([]);

    // const handleName = (e) => {
    //     setName(e.target.value);
    // }
    //
    // const handleEmail = (e) => {
    //     setEmail(e.target.value);
    // }
    //
    // const handleAge = (e) => {
    //     setAge(e.target.value);
    // }

    const handleInputData = (e) => {
        const nameField = e.target.name;
        const valueField = e.target.value;
        setMemberInfo({ ...memberInfo, [nameField]: valueField});
    }

    const handleAddNewMember = (e) => {
        e.preventDefault();
        // if (name && email && age) {
        //     const newMember = {
        //         name: name,
        //         email: email,
        //         age: age
        //     };
        //     setMembers([...members, newMember]);
        // } else {
        //     alert('Please input name or email or age');
        // }
        if (memberInfo.name && memberInfo.email && memberInfo.age) {
            setMembers([...members, memberInfo]);
            setMemberInfo({ name: '', email: '', age: ''});
        }
    }

    return (
        <article>
            <form onSubmit={handleAddNewMember}>
                <div>
                    <label htmlFor={'name'}>Name:</label>
                    <input
                        name={'name'}
                        type={'text'}
                        value={memberInfo.name}
                        onChange={handleInputData}
                    />
                </div>
                <div>
                    <label htmlFor={'email'}>Email:</label>
                    <input
                        name={'email'}
                        type={'email'}
                        value={memberInfo.email}
                        onChange={handleInputData} />
                </div>
                <div>
                    <label htmlFor={'age'}>Age:</label>
                    <input
                        name={'age'}
                        type={'number'}
                        value={memberInfo.age}
                        onChange={handleInputData} />
                </div>
                <button type={'submit'}>Add member</button>
            </form>
            <div>
                {members.map((member, index) => {
                    return (
                        <div key={index}>
                            <h4>{member.name}</h4>
                            <h4>{member.email}</h4>
                            <h4>{member.age}</h4>
                        </div>
                    )
                })}
            </div>
        </article>
    )
}
export default FormReact;