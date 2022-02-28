/**
 * Validates signup fields.
 *
 *
 * @remarks
 * Could add more validation checks, such as a regex for email.
 *
 * @param username - A string for username.
 * @param email - A string for user's email.
 * @param password - A string for user's password.
 * @param confirm - A string to confirm user's password.
 *
 * @returns - String (for an error) or null (for no error).
 *
 *
 */
export const validateSigniupFields = ({
  username,
  email,
  password,
  confirm
}: {
  username: string;
  email: string;
  password: string;
  confirm: string;
}): null | string => {
  if (
    !username.length ||
    !email.length ||
    !password.length ||
    !confirm.length
  ) {
    return 'Fields cannot be blank';
  }

  if (password !== confirm) {
    return 'Password fields do not match';
  }

  return null;
};
