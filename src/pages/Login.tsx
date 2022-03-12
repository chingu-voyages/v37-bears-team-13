import React, { useState,useEffect } from 'react';
import { useNavigate} from 'react-router-dom';
import FormNotification from '../components/FormNotification';

const Login = (): JSX.Element => {
  // type interface
  interface FormAlertType {
    status: FormStatus;
    title: string;
    message: string;
  }  
  // State & inital values 
  const initialValues = {
    username: '',
    password: '',
    togglePassword: 'password',
    incorrectPassword: false,
  };
  const initialFormState: FormAlertType = {
    status: 'pending',
    title: '',
    message: ''
  };
  const [values, setValues] = useState(initialValues);
  const [formState, setFormState] = useState(initialFormState);
  const [show, setShow] = useState(false);
  // Navigate on sign up sucess
  const navigate = useNavigate();
  // show & reset form
  useEffect(() => {
    if (!show) return setShow(true);
    const timer = setTimeout(() => {
        setFormState(initialFormState);
      }, 3000);
      return () => clearTimeout(timer);
  },[formState.status]);
  // Handler Functions 
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try{
      const res = await fetch (`${process.env.REACT_APP_BACKEND_URL}/api/v1/users/login`,
      {
        method: 'POST',
        credentials: 'include',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
      })
      setFormState({
        status: 'pending',
        title: 'Loading',
        message: 'Attempting to Log in...'
      });

      if(res.ok){
        setFormState({
          status: 'success',
          title: 'Success!',
          message:
            'Welcome back to Stock Race! You will be redirected to your home page in just a moment.'
        });
        const timer = setTimeout(() => {
          navigate('/');
        }, 3000);
        return () => clearTimeout(timer);
        // const user = await res.json() TO DO: set user. 
      }
      else{
        setFormState({
          status: 'error',
          title: 'Error',
          message: 'Incorrect Username or password!'
        });
      }
    }
    catch(err){
      setFormState({
        status: 'error',
        title: 'Error',
        message: 'Something went wrong!'
      });
    }
  }
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value
    });
  };
  const handleTogglePassWord = () =>{
    setValues({
      ...values,
      togglePassword: togglePassword === 'password' ? 'text' : 'password'
    })
  };
  const { username, password,togglePassword,incorrectPassword } = values;
  const { status, title, message } = formState;

  return (
    <div className="container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input
            type="text"
            name="username"
            placeholder="StockWhizKid43"
            value={username}
            onChange={(e) => handleInputChange(e)}
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type = {togglePassword}
            name="password"
            placeholder="123pass456"
            value={password}
            onChange={(e) => handleInputChange(e)}
          />
          <br />
        </label>
        <label>
          Show Password:
          <input 
            type = "checkbox"
            name = "togglePassword"
            placeholder = "none"
            onClick = {handleTogglePassWord}
          />
        </label>
        <br />
        <button type="submit"> Login</button>
      </form>
      {show && (<FormNotification status={status} message={message} title={title} />)}
    </div>
  );
};

export default Login;
