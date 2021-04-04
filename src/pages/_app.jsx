import Head from "next/head";
import { createGlobalStyle } from "styled-components";
import { ApolloProvider } from "@apollo/client";
import { useApollo } from "../apollo/client";

import { C_GHOST } from "@bbc/psammead-styles/colours";

const GlobalStyle = createGlobalStyle`
	// Hack to stlye the root div of nextJS app
  #__next {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    background-color: ${C_GHOST};
    @media only screen and (max-width: 250px) {
      flex-direction: row;
    }
	}
	
	a, p, h1, h2, h3, h4, label {
		font-family: 'Lato', sans-serif;
	}
`;

const App = ({ Component, pageProps }) => {
  const apolloClient = useApollo(pageProps.initialApolloState);

  return (
    <>
      <GlobalStyle />
      <Head>
        <title>Khoa Thế Phan</title>
        <meta
          name="viewport"
          content="initial-scale=1.0, width=device-width"
          key="viewport"
        />
      </Head>
      <ApolloProvider client={apolloClient}>
        <Component {...pageProps} />
      </ApolloProvider>
    </>
  );
};

export default App;
