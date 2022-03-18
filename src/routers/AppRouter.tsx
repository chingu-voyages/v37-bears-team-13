import { HashRouter, Routes, Route } from 'react-router-dom';
import App from '../App';
import Header from '../components/Header/Header';
import AddStock from '../pages/AddStock';
import Login from '../pages/Login';
import ProtectedRoute from 'pages/ProtectedRoute';
import Signup from '../pages/Signup';
import WrongRoutePage from '../pages/WrongRoutePage';

const AppRouter = () => {
  return (
    <HashRouter>
      <Header />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="*" element={<WrongRoutePage />} />
        <Route
          path="/addStock"
          element={
            <ProtectedRoute user={'authorizedUser'}>
              <AddStock />
            </ProtectedRoute>
          }
        />
      </Routes>
    </HashRouter>
  );
};
export default AppRouter;
