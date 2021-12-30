import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import "./Goals.css";

export default function Goals() {
  const theme = createTheme({
    palette: {
      neutral: {
        main: "#eb06ff",
        contrastText: "#eb06ff",
      },
    },
  });

  return (
    <div className="goal-page-wrapper" style={{ margin: 30, borderradius: 25 }}>
      <h1 className="title">Goals</h1>
      <Stack spacing={2} direction="column">
        <ThemeProvider theme={theme}>
          <Button variant="outlined" color="neutral" size="large" href="/addgoals">
            Add Goals
          </Button>
          <Button variant="outlined" color="neutral" size="large" href="/activegoals">
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
  );
}
