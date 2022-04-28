import React, { useState } from "react";
import { Formik } from 'formik';

const FormikReact = () => {
    const [members, setMembers] = useState([]);
    return (
        <div>
            <h1>Anywhere in your app!</h1>
            <Formik
                initialValues={{ name: 'Nguyen Van A', email: 'a@gmail.com', age: '18' }}
                validate={values => {
                    const errors = {};
                    if (!values.email) {
                        errors.email = 'Required';
                    } else if (
                        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                    ) {
                        errors.email = 'Invalid email address';
                    }
                    if (!values.name) {
                        errors.name = 'Required';
                    }
                    if (!values.age) {
                        errors.age = 'Required';
                    }
                    return errors;
                }}
                onSubmit={(values, { setSubmitting }) => {
                    console.log('submit-', values);
                    setMembers([...members, values]);
                }}
            >
                {({
                      values,
                      errors,
                      touched,
                      handleChange,
                      handleBlur,
                      handleSubmit,
                      isSubmitting,
                      /* and other goodies */
                  }) => (
                    <form onSubmit={handleSubmit}>
                        <input
                            type="text"
                            name="name"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.name}
                        />
                        <br />
                        {errors.name && touched.name && errors.name}
                        <br />
                        <input
                            type="email"
                            name="email"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.email}
                        />
                        <br />
                        {errors.email && touched.email && errors.email}
                        <br />
                        <input
                            type="age"
                            name="age"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.age}
                        />
                        <br />
                        {errors.age && touched.age && errors.age}
                        <br />
                        <button type="submit">
                            Submit
                        </button>
                    </form>
                )}
            </Formik>
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
        </div>
    )
}

export default FormikReact;