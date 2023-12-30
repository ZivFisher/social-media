import Home from 'pages/Home/Home';
import Login from 'pages/Login/Login';
import Profile from 'pages/Profile/Profile';
import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { createTheme } from '@mui/material';
import { themeSettings } from 'theme';
import { Navigate, Route, Routes } from 'react-router-dom';

function App() {
  const mode = useSelector(state => state.mode);
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
  const isAuth = Boolean(useSelector((state) => state.token));

  return (
    <div className="app">
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/home' element={isAuth ? <Home /> : <Navigate to='/' />} />
          <Route path='/Profile/:userId' element={isAuth ? <Profile /> : <Navigate to='/' />} />
        </Routes>
      </ThemeProvider>
    </div>
  );
}

export default App;
