import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import FormNotification from '../components/FormNotification';
import { validateSignupFields } from '../util/validation';
import { useAppCtx } from 'context';

interface FormAlertType {
  status: FormStatus;
  title: string;
  message: string;
}

const initialValues = {
  username: '',
  email: '',
  password: '',
  confirm: ''
};

const initialFormState: FormAlertType = {
  status: 'pending',
  title: '',
  message: ''
};

const Signup = (): JSX.Element => {
  // Form values.
  const [values, setValues] = useState(initialValues);

  // Form state for displaying notification on success, error,
  // or pending.
  const [formState, setFormState] = useState(initialFormState);
  const [show, setShow] = useState(false);

  // Get context.
  const { setLoggedIn } = useAppCtx();

  // Navigate somewhere on signup success.
  const navigate = useNavigate();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value
    });
  };

  // Show/reset form.
  useEffect(() => {
    if (!show) {
      setShow(true);
    } else {
      const timer = setTimeout(() => {
        setFormState(initialFormState);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [formState.status]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // If fields aren't okay, show an error and don't make the
    // request.
    const validationErrors = validateSignupFields(values);
    if (validationErrors) {
      setShow(true);
      setFormState({
        status: 'error',
        title: 'Error',
        message: validationErrors
      });
      return;
    }

    // Fields are okay, so proceed.
    const { username, email, password } = values;

    // Make POST request to backend.
    try {
      setFormState({
        status: 'pending',
        title: 'Loading',
        message: 'Signing up...'
      });
      const response = await fetch(
        `${process.env.REACT_APP_BACKEND_URL}/api/v1/users/signup`,
        {
          method: 'POST',
          credentials: 'include',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ username, email, password })
        }
      );

      if (response.ok) {
        // Show success and push to home page.
        setFormState({
          status: 'success',
          title: 'Success!',
          message:
            'Welcome to Stock Race! You will be re-routed to the home page in just a moment.'
        });

        // Re-direct user to homepage.
        const timer = setTimeout(() => {
          setLoggedIn(true);
          navigate('/');
        }, 3000);
        return () => clearTimeout(timer);
      } else {
        // TODO: Consider Extracting error message from backend.
        setFormState({
          status: 'error',
          title: 'Error',
          message: 'Something went wrong'
        });
      }
    } catch (err) {
      // Show error.
      setFormState({
        status: 'error',
        title: 'Error',
        message: 'Something went wrong'
      });
    }
  };

  const { username, email, password, confirm } = values;
  const { status, title, message } = formState;

  return (
    <>
      <div className="container">
        <h2>Sign Up</h2>
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
        {show && (
          <FormNotification status={status} message={message} title={title} />
        )}
      </div>
    </>
  );
};

export default Signup;
