import React, { useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import GlobalStyles, { lightTheme, darkTheme } from '../Styled/GlobalStyles';
import { MainLayout } from '../Styled/Layout';
import AuthProvider from '../../providers/Auth';
import VideoProvider from '../../providers/Video';
import NavBar from '../NavBar';
import LoginPage from '../../pages/Login';
import NotFound from '../../pages/NotFound';
import VideosPage from '../../pages/Videos';
import VideoDetailPage from '../../pages/VideoDetail';
import FavoriteVideos from '../../pages/FavoriteVideos';
import Private from '../Private';
import { THEME_MODE_STORAGE_KEY } from '../../utils/constants';
import { storage } from '../../utils/storage';

function App() {
  const [mode, setMode] = useState(() => {
    return storage.get(THEME_MODE_STORAGE_KEY) || 'light';
  });

  const onChangeTheme = (m) => {
    storage.set(THEME_MODE_STORAGE_KEY, m);
    setMode(m);
  };

  return (
    <BrowserRouter>
      <AuthProvider>
        <ThemeProvider theme={mode === 'light' ? lightTheme : darkTheme}>
          <GlobalStyles />
          <NavBar theme={mode} onChangeTheme={onChangeTheme} />
          <MainLayout>
            <Switch>
              <Route exact path="/login">
                <LoginPage />
              </Route>
              <VideoProvider>
                <Route exact path="/">
                  <VideosPage />
                </Route>
                <Route exact path="/video/:id">
                  <VideoDetailPage />
                </Route>
                <Private exact path="/fav-videos">
                  <FavoriteVideos />
                </Private>
              </VideoProvider>
              <Route path="*">
                <NotFound />
              </Route>
            </Switch>
          </MainLayout>
        </ThemeProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
