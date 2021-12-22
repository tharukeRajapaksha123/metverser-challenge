import { MoralisProvider } from 'react-moralis'
import '../styles/globals.css'

const appId = "qtYw1cDW5L3tRqmzSMgDZkWh5LtVHQC85lKDtPIf"

const serverUrl = "https://8uc3cd01vihd.usemoralis.com:2053/server"

function MyApp({ Component, pageProps }) {
  return (
    <MoralisProvider appId={appId} serverUrl={serverUrl}>
      <Component {...pageProps} />
    </MoralisProvider>
  );
  
 
}

export default MyApp
