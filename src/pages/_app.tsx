/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */
import { api } from '../utils/api';

import { type Session } from 'next-auth';
import { SessionProvider } from 'next-auth/react';
import { type AppType } from 'next/app';

import '../styles/globals.css';

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => (
  <SessionProvider session={session}>
    <Component {...pageProps} />
  </SessionProvider>
);

export default api.withTRPC(MyApp);
