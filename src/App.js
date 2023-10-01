import './App.css';

import Login from './components/Login';
import Header from './components/Header';
import { Box, Paper } from '@mui/material';
import MultiTag from './components/MultiTag';

function App() {
  return (
    <div className="App">
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="100vh"
        p={2}
      >
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
        >
          <Paper elevation={0} sx={{ width: "100%", maxWidth:"400px", p: 2, mb: 2, border:"1px solid rgb(219, 219, 219)" }}>
            <Header />
            <Login />
          </Paper>
          <Paper elevation={0} sx={{ width: "100%", p: 3, border:"1px solid rgb(219, 219, 219)" }}>
            <MultiTag hideNavBar={true} />
          </Paper>
        </Box>
      </Box>
    </div>
  );
}

export default App;
