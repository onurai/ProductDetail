import React from 'react'
import { useFormik } from 'formik';

const Login = () => {
  
  // let Validation = yup.object().shape({
  //   email: yup.string().email().required(),
  //   password: yup.string().min(6).required(),
  //   passwordConfirmed: yup.string().oneOf([yup.ref('password')]).required();
  // })

  const {handleSubmit, handleChange, values} = useFormik({
    initialValues: {
      email: '',
      password: "",
      passwordConfirmed: "",
    },
    onSubmit: values => {
      console.log(values);
    }
  });

  return (
    <div className='text-center'>
        <h1 className='my-5' >Sign Up</h1>
        <form className='text-center' onSubmit={handleSubmit} >
          <label>Email</label>
          <input value={values.email} onChange={handleChange} name='email' />

          <br /><br />

          <label>Password</label>
          <input value={values.password} onChange={handleChange} name='password' />

          <br /><br />

          <label>Confirm Password</label>
          <input value={values.passwordConfirmed} onChange={handleChange} name='confirmPassword' />

          <br /><br />

          <button type="submit">Submit</button>

          <br /><br />

          <code>{JSON.stringify(values)}</code>
        </form>
    </div>
  )
}

export default Login