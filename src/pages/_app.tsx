import React from 'react';
import { AppProps } from 'next/app';

import { ThemeProvider } from 'styled-components';
import '../styles/global.css';
import theme from '../styles/theme';
// import 'tailwindcss/tailwind.css';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => (
  <Component {...pageProps} />
);

export default MyApp;
