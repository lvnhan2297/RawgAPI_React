import React from 'react'
import {Link} from 'react-router-dom'
import {useForm} from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function RegisterContainer() {
   const validationSchema = Yup.object().shape({
    email: Yup.string()
    .required('Email is required')
    .email('This field must be email'),
    username: Yup.string()
    .required('Password is required')
    .min(6, 'This field min 6 characters')
    .max(15, 'This field max 15 characters'),
    password: Yup.string()
    .required('Password is required'),
    passwordConfirmation: Yup.string()
    .required('Password is required')
    .oneOf([Yup.ref('password'), null], 'Passwords must match'),
  });
  const {register, handleSubmit, errors} = useForm({resolver: yupResolver(validationSchema)});
  const onSubmit = () => toast("🦄 Unsupported feature");
  return (
    <>
    <div>
        <ToastContainer style={{ fontSize: '1.6rem' }}/>
    </div>
    <div className="form">
      <h2 className="heading-1">SIGN UP</h2>
      <form className="form__form"  onSubmit={handleSubmit(onSubmit)}>
        <div>
          <input className="form__input" ref={register} placeholder="Email" name="email" type="email" autoComplete="on"/>
           <div className="invalid-feedback">{errors.email?.message}</div>
        </div>
        <div>
          <input className="form__input" ref={register} placeholder="Username" name="username" type="text" autoComplete="on"/>
           <div className="invalid-feedback">{errors.username?.message}</div>
        </div>
        <div>
          <input className="form__input" ref={register} placeholder="Password" name="password" type="password" autoComplete="on"/>
           <div className="invalid-feedback">{errors.password?.message}</div>
        </div>
        <div>
          <input className="form__input" ref={register} placeholder="Confirm password" name="passwordConfirmation" type="password" autoComplete="on"/>
           <div className="invalid-feedback">{errors.passwordConfirmation?.message}</div>
        </div>
        <button type="submit" className="btn form__submit">SIGN UP</button>
      </form>
      <Link to="/login" style={{color: 'rgb(255, 255, 255)'}}>Already have an account? Login.</Link>
    </div>
    </>
  )
}

export default RegisterContainer
