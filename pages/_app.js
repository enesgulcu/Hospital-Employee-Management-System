import '../styles/globals.css'
//store yapısına erişmek ve kullanmak için tanımladık
import { store } from '../redux/store.js';
//react ile redux arası bağlantıyı sağlar
import { Provider } from 'react-redux';

export default function MyApp({ Component, pageProps }) {
  return (
  <Provider store={store}>
  <Component {...pageProps}/>
  </Provider>
  )
}