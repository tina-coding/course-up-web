import { ChakraProvider, ColorModeProvider } from '@chakra-ui/react';
import Main from '../components/layouts/Main';
import theme from '../theme';

function MyApp({ Component, pageProps }) {
  return (
      <ChakraProvider resetCSS theme={theme}>
        <ColorModeProvider
          options={{
            useSystemColorMode: true
          }}
        >
          <Main>
          <Component {...pageProps} />

          </Main>
        </ColorModeProvider>
      </ChakraProvider>
  );
}

export default MyApp;
