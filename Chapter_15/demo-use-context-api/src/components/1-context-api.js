import React, {useContext, useState} from 'react';
import { data } from '../data/data';
// B1: Khoi tao context API
const PersonContext = React.createContext();

const ContextApi = () => {
    const [people, setPeople] = useState(data);

    const removePerson = (id) => {
        setPeople((people) => {
            return people.filter((p) => p.id !== id)
        });
    }
    return (
        /* B2: Khoi tao 1 provider o component cha, de wrap lai component con, chau, chat. */
        <PersonContext.Provider value={{ people, removePerson }}>
            <UserList />
        </PersonContext.Provider>
    )
}

const UserList = () => {
    // B3: Su dung data truyen tu component cha
    const peopleData = useContext(PersonContext);
    console.log('peopleData', peopleData);
    return (
        <>
            {peopleData.people.map((data) => {
                return <SinglePerson key={data.id} {...data} />
            })}
        </>
    )
}

// Day la component chau.
const SinglePerson = (props) => {
    // su dung props tu component con
    // B3: Su dung data truyen tu component cha
    const { removePerson } = useContext(PersonContext);
    return (
        <div>
            <h5>{props.name}</h5>
            <button onClick={() => removePerson(props.id)}>Remove user</button>
        </div>
    )
}
export default ContextApi;