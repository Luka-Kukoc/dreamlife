import { useAuth0 } from '@auth0/auth0-react';
import { Button } from '@mui/material';

function LoginButton() {
  const { loginWithRedirect } = useAuth0();

  return <Button variant="contained" color="success" size="large" onClick={() => loginWithRedirect()}>Log in</Button>;
}

export default LoginButton;
