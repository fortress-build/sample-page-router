import { NerveProvider } from '@nerve-js/next';
import type { AppProps } from 'next/app';
 
export default function App({ Component, pageProps }: AppProps) {
  return (
    <NerveProvider
      redirectUrl="http://localhost:3000/"
      afterRedirectUrl="http://localhost:3000/"
      signInUrl="http://localhost:3000/">
      <Component {...pageProps} />
    </NerveProvider>
  );
}