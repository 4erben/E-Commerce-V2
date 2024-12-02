import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import {Provider } from "react-redux";
import store from './redux/store.jsx';
import { BrowserRouter } from 'react-router-dom';
import {QueryClientProvider , QueryClient} from "react-query";
import {ReactQueryDevtools} from "react-query/devtools"

const queryClient = new QueryClient();
createRoot(document.getElementById('root')).render(
  <QueryClientProvider client={queryClient}>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
    <ReactQueryDevtools initialIsOpen={false} position='bottom-right' />
  </QueryClientProvider>
)
