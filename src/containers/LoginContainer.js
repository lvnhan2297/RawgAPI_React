import React from 'react'
import {Link} from 'react-router-dom'
import {useForm} from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function LoginContainer() {
   const validationSchema = Yup.object().shape({
    email: Yup.string()
    .required('Email is required'),
    password: Yup.string()
    .required('Password is required'),
  });
  const {register, handleSubmit, errors} = useForm({resolver: yupResolver(validationSchema)});
  // const onSubmit = data => alert(JSON.stringify(data));
  const onSubmit = () => toast("🦄 Unsupported feature");
  return (
    <>
      <div>
        <ToastContainer style={{ fontSize: '1.6rem' }}/>
      </div>
      <div className="form">
        <h2 className="heading-1">LOGIN</h2>
        <form className="form__form" onSubmit={handleSubmit(onSubmit)}>
          <div>
            <input className="form__input" ref={register} placeholder="Email" name="email" type="email" autoComplete="on"/>
            <div className="invalid-feedback">{errors.email?.message}</div>
          </div>
          <div>
            <input className="form__input" ref={register} placeholder="Password" name="password" type="password" autoComplete="on"/>
            <div className="invalid-feedback">{errors.password?.message}</div>
          </div>
          <button type="submit" className="btn form__submit">LOGIN</button>
        </form>
        <Link to="/register" style={{color: 'rgb(255, 255, 255)'}}>Don't have an account? Sign up.</Link>
        <a href="#/" style={{color: 'rgb(255, 255, 255)'}} onClick={onSubmit}>Forgot your password?</a>
      </div>
    </>
  )
}

export default LoginContainer
