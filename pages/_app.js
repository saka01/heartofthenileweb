import "../public/css/style.css";
import "../public/globals.css";
import { SessionProvider } from "next-auth/react";




export default function App({ Component, pageProps, session }) {
          return (
            <SessionProvider session={session}>
                <Component {...pageProps} />
            </SessionProvider>
          );

}
