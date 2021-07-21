/* eslint-disable react/jsx-props-no-spreading */
import { AppProps } from 'next/app';
import 'styles/global.css';
import 'public/fontIcon/style.css';

export default function App({ Component, pageProps } : AppProps) {
  return <Component {...pageProps} />;
}
