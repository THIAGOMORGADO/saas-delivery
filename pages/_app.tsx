import { Provider as AppContextProvider } from "@/contexts/app";
import { Provider as AuthContextProvider } from "@/contexts/app";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Analytics } from "@vercel/analytics/react"

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AuthContextProvider>  
      <AppContextProvider>
          
        <Component {...pageProps} />
        
      </AppContextProvider>
    </AuthContextProvider>
  );
}