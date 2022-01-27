import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import './Home.css';
import { useNavigate } from 'react-router';
import Header from '../components/Header';

export default function Homepage() {
  const theme = createTheme({
    palette: {
      neutral: {
        main: '#eb06ff',
        contrastText: '#eb06ff',
      },
    },
  });
  const navigate = useNavigate();
  return (
    <>
      <Header />
      <div className="button-wrapper" style={{ margin: 30, borderradius: 25 }}>
        <Stack spacing={2} direction="column">
          <ThemeProvider theme={theme}>
            <Button
              variant="outlined"
              color="neutral"
              size="large"
              onClick={() => navigate('/dreamlife/goals')}
            >
              Goals
            </Button>
            <Button variant="outlined" color="neutral" size="large">
              Habits
            </Button>
            <Button variant="outlined" color="neutral" size="large">
              Principles
            </Button>
            <Button variant="outlined" color="neutral" size="large">
              Wall of inspiration
            </Button>
            <Button variant="outlined" color="neutral" size="large">
              Wall of aspirations
            </Button>
            <Button variant="outlined" color="neutral" size="large">
              Projects
            </Button>
            <Button variant="outlined" color="neutral" size="large">
              Settings
            </Button>
          </ThemeProvider>
        </Stack>

      </div>
    </>
  );
}
