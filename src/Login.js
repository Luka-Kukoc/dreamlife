import './App.css';
import { useAuth0 } from '@auth0/auth0-react';
import { useNavigate } from 'react-router-dom';
import Homepage from './pages/Home';
import LoginButton from './components/LoginButton';
import Header from './components/Header';

function Login() {
  // test
  const navigate = useNavigate();
  const { isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return (

      <div className="loading-container">
        <Header />
        <h1>Loading content...</h1>
      </div>
    );
  }
  if (!isAuthenticated) {
    return (
      <div className="login-wrapper">
        <Header />
        <p>Please Login</p>
        <LoginButton />
      </div>
    );
  }

  return (
    navigate('/dreamlife/home')
  );
}

export default Login;
