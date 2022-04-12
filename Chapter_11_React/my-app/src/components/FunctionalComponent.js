import React from 'react';

const FunctionalComponent = function ({ age, family, name, university }) {
    return (
        <div>
            <h2>Welcome ! This is functional component</h2>
            <h3>{name}</h3>
            <h3>{age}</h3>
            <h3>{university}</h3>
            <h3>{family.map((value, key) => {
                return (
                    <h5 key={key}>{value}</h5>
                )
            })}</h3>
        </div>
    )
}

export default FunctionalComponent;