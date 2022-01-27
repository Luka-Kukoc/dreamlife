import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import './Goals.css';
import Header from '../components/Header';
import { useNavigate } from 'react-router-dom';

const navigate = useNavigate()
export default function Goals() {
  const theme = createTheme({
    palette: {
      neutral: {
        main: '#eb06ff',
        contrastText: '#eb06ff',
      },
    },
  });

  return (
    <>
      <Header />
      <div className="goal-page-wrapper" style={{ margin: 30, borderradius: 25 }}>
        <h1 className="title">Goals</h1>
        <Stack spacing={2} direction="column">
          <ThemeProvider theme={theme}>
            <Button variant="outlined" color="neutral" size="large" onClick={() => navigate('/dreamlife/goals/addgoals')}>
              Add Goals
            </Button>
            <Button variant="outlined" color="neutral" size="large" onClick={() => navigate('/dreamlife/goals/activegoals')}>
              Active goals
            </Button>
            <Button variant="outlined" color="neutral" size="large">
              2022
            </Button>
            <Button variant="outlined" color="neutral" size="large">
              2020-2030
            </Button>
            <Button variant="outlined" color="neutral" size="large">
              Decades
            </Button>
          </ThemeProvider>
        </Stack>

      </div>
    </>
  );
}
