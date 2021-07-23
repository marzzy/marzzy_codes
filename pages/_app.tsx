/* eslint-disable react/jsx-props-no-spreading */
import { useEffect } from 'react';
import { AppProps } from 'next/app';
import 'styles/global.css';
import 'public/fontIcon/style.css';
import { ThemeProvider } from '@material-ui/styles';
import theme from 'theme';

export default function App({ Component, pageProps } : AppProps) {
  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  // TODO: add provider to change theme
  return (
    <ThemeProvider theme={theme('dark')}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
