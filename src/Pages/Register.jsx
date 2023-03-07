import React from 'react'
import {useFormik } from 'formik';
// import * as yup from 'yup';

const Register = () => {
    const {handleSubmit, handleChange, values} = useFormik({
        initialValues: {
          firstName: 'onur',
          lastName: 'ibadov',
          email: 'onur@gmail.com',
          gender: 'male',
          hobies: [],
          country: "Turkey",
        },
        onSubmit: values => {
          console.log(values);
        }
    });
        
  return (
    <div className='text-center'>
        <h1 className='my-5' >Sign Up</h1>
        <form className='text-center' onSubmit={handleSubmit} >
                <label htmlFor="firstName">First Name</label>
                <input value={values.firstName} onChange={handleChange} name='firstName' />

                <br /><br />

                <label htmlFor="lastName">Last Name</label>
                <input value={values.lastName} onChange={handleChange} name='lastName' />

                <br /><br />

                <label htmlFor="email">Email</label>
                <input value={values.email} onChange={handleChange} name='email' />

                <br /><br />

                <span>Male</span>
                <input 
                    onChange={handleChange} 
                    name='gender' 
                    value='male' 
                    type="radio" 
                    checked={values.gender === "male"}
                />
                
                <span>Female</span>
                <input 
                    onChange={handleChange} 
                    name='gender' 
                    value='female' 
                    type='radio' 
                    checked={values.gender === "female"}
                />
                <br /><br />

                <div>
                    Football
                    <input type={'checkbox'} value="Football" onChange={handleChange} name='hobies' />
                </div>

                <div>
                    Cinema
                    <input type={'checkbox'} value="Cinema" onChange={handleChange} name='hobies' />
                </div>

                <div>
                    Photography
                    <input type={'checkbox'} value="Photography" onChange={handleChange} name='hobies' />
                </div>

                <br /><br />

                <select 
                    name="country" 
                    value={values.country} 
                    onChange={handleChange}
                >

                    <option value="turkey">Turkey</option>
                    <option value="russian">England</option>
                    <option value="usa">USA</option>
                </select>

                <br /><br />

                <button type="submit">Submit</button>

                <br /><br />

                <code>{JSON.stringify(values)}</code>
            </form>
    </div>
  )
}

export default Register