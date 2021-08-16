/* eslint-disable react/jsx-props-no-spreading */
import { useEffect, useContext, useState } from 'react';
import { AppProps } from 'next/app';
import 'styles/global.css';
import 'public/fontIcon/style.css';
import { ThemeProvider } from '@material-ui/styles';
import theme from 'theme';
import Mode, { modes } from 'context/theme';

export default function App({ Component, pageProps } : AppProps) {
  const { mode } = useContext(Mode);
  const [currentMode, setCurrentMode] = useState(mode);

  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  function toggleMode() {
    if (currentMode === modes[0]) {
      setCurrentMode(modes[1]);
    } else {
      setCurrentMode(modes[0]);
    }
    return true;
  }

  return (
    <ThemeProvider theme={theme(currentMode)}>
      <Mode.Provider value={{ toggleMode, mode: currentMode }}>
        <Component {...pageProps} />
      </Mode.Provider>
    </ThemeProvider>
  );
}
