import { useState, useEffect } from 'react';
/**
 * This hook makes a request to the backend to see if the user is
 * logged in.
 *
 *
 * @remarks
 *
 * @returns - loggedIn    -- a boolean
 *            setLoggedIn -- a react set state action for loggedIn
 *
 *
 */
export const useIsLoggedIn = () => {
  const [loggedIn, setLoggedIn] = useState<boolean>(false);

  useEffect(() => {
    const checkIfLoggedIn = async () => {
      try {
        const res = await fetch(
          `${process.env.REACT_APP_BACKEND_URL}/api/v1/authenticated`,
          {
            method: 'GET',
            credentials: 'include'
          }
        );

        if (res.ok) {
          const result = await res.json();
          const { authenticated } = result;
          if (typeof authenticated === 'boolean') {
            setLoggedIn(authenticated);
          }
        }
      } catch (err) {}
    };
    checkIfLoggedIn();
  }, []);

  return { loggedIn, setLoggedIn };
};
