import { Navigate } from 'react-router-dom';

export interface Props {
  loggedIn: boolean;
  redirectPath?: string;
  children: JSX.Element;
}
const ProtectedRoute = ({
  loggedIn,
  redirectPath = '/Login',
  children
}: Props): JSX.Element => {
  if (!loggedIn) {
    return <Navigate to={redirectPath} replace />;
  }
  return children;
};

export default ProtectedRoute;
