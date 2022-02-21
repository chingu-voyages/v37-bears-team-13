import React, { useState } from 'react';
import NavBar from '../components/NavBar';
const initialValues = {
  username: '',
  email: '',
  password: '',
  confirm: '',
};

const Signup = (): JSX.Element => {
  const [values, setValues] = useState(initialValues);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  const { username, email, password, confirm } = values;

  return (
    <>
      <div className="App">
        <header>
          <h1>Stock Race</h1>
          <NavBar />
          <h2>Sign Up</h2>
        </header>
        <form onSubmit={(e) => handleSubmit(e)}>
          <label>
            Username:
            <input
              type="text"
              name="username"
              placeholder="StockWhizKid34"
              value={username}
              onChange={(e) => handleInputChange(e)}
            />
          </label>
          <br />
          <label>
            Email:
            <input
              type="email"
              name="email"
              placeholder="yourname@youremail.com"
              value={email}
              onChange={(e) => handleInputChange(e)}
            />
          </label>
          <br />
          <label>
            Password:
            <input
              type="password"
              name="password"
              value={password}
              onChange={(e) => handleInputChange(e)}
            />
          </label>
          <br />
          <label>
            Confirm Password:
            <input
              type="password"
              name="confirm"
              value={confirm}
              onChange={(e) => handleInputChange(e)}
            />
          </label>
          <br />
          <button>Sign Up</button>
        </form>
      </div>
    </>
  );
};

export default Signup;