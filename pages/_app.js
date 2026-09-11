import GlobalStyle from "../styles";
import { SWRConfig } from "swr";

const fetcher = (url) =>
  fetch(url).then((response) => {
    if (!response) {
      throw new Error(
        "an error occurred while fetching the data, sorry for that"
      );
    }
    return response.json();
  });

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <SWRConfig value={{ fetcher }}>
        <Component {...pageProps} />
      </SWRConfig>
    </>
  );
}
