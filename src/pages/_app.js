import '../styles/globals.css'
import { AuthContextProvider } from '@/config/authContext'

export default function App({ Component, pageProps }) {
  return <AuthContextProvider>
    <Component {...pageProps} />
  </AuthContextProvider>
  
}
