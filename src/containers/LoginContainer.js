import React from 'react'

function LoginContainer() {
  return (
    <>
      <div className="form">
        <h2 className="heading-1">LOGIN</h2>
        <form action="#" className="form__form">
          <div><input className="form__input" placeholder="Email" name="email" type="email" defaultValue /></div>
          <div><input className="form__input" placeholder="Password" name="password" type="password" defaultValue /></div>
          <button type="submit" className="btn form__submit">LOGIN</button>
        </form>
        <a href="#/signup">Don't have an account? Sign up.</a><a href="#/password-recovery">Forgot your password?</a>
      </div>
    </>
  )
}

export default LoginContainer
