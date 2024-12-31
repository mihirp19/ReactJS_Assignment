import React, { useState } from 'react'
import './Modal.css'
const Modal = () => {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);

  const openLoginModal = () => setIsLoginOpen(true);
  const closeLoginModal = () => setIsLoginOpen(false);

  const openRegisterModal = () => setIsRegisterOpen(true);
  const closeRegisterModal = () => setIsRegisterOpen(false);

  return (
    <div className='App'>
      <h1>Modal Login Form</h1>
      <button onClick={openLoginModal}>Open Modal</button>

      <h2>Registration Form</h2>
      <button onClick={openRegisterModal}>Open Register Modal</button>

      {isLoginOpen && (
        <InModal title='Login to my account' closeModal={closeLoginModal}>
          <LoginForm />
        </InModal>
      )}
      {isRegisterOpen && (
        <InModal title='Create new account' closeModal={closeRegisterModal}>
          <RegisterForm />
        </InModal>
      )}
    </div>
  )
}

function InModal({title, closeModal, children}){
  return(
    <div className='modal-overlay'>
    <div className='modal-content'>
    <h3>{title}</h3>
    <span className='close-button' onClick={closeModal}>&times;</span>
    {children}
    </div>
    </div>
  );
}

function LoginForm(){
  return(
    <form className='form'>
      <label>Email</label>
      <input type="email" placeholder='Enter email'/>

      <label>Password</label>
      <input type="password" placeholder='Enter Password'/>

      <div className='checkbox'>
      <input type="checkbox" />
      <label>Remeber me</label>
      </div>

      <button type='submit' className='submit-button'>Login</button>
      <div className='form-footer'>
        <a href="#">Forgot Password</a>
        <a href="#">Create a new Account</a>
      </div>
    </form>
  )
}

function RegisterForm(){
  return(
    <form className='form'>
      <label>Username</label>
      <input type="text" placeholder='Enter username' />

      <label>Email</label>
      <input type="email" placeholder='Enter email'/>

      <label>Password</label>
      <input type="password" placeholder='Enter Password'/>

      <button type='submit'>Register</button>
    </form>
  )
}

export default Modal
