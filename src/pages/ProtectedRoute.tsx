import { Navigate } from 'react-router-dom';

export interface Props {
  user: string;
  redirectPath?: string;
  children: JSX.Element;
}
const ProtectedRoute = ({
  user,
  redirectPath = '/',
  children
}: Props): JSX.Element => {
  if (!user) {
    return <Navigate to={redirectPath} replace />;
  }
  return children;
};

export default ProtectedRoute;
