import "../public/css/style.css";
import { SessionProvider } from "next-auth/react";
import { Provider } from "react-redux";
import store from "../redux/store";



export default function App({ Component, pageProps, session }) {
          return (
            <SessionProvider session={session}>
              <Provider store={store}>
                <Component {...pageProps} />
              </Provider>
            </SessionProvider>
          );

}
