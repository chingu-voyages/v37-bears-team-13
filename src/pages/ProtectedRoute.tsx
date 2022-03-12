import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({
  user,
  redirectPath = '/',
  children
}): JSX.Element => {
  if (!user) {
    return <Navigate to={redirectPath} replace />;
  }
  return children;
};

export default ProtectedRoute;
