import { SearchPage } from 'components/pages/SearchForm/SearchPage';
import { SearchResultContextProvider } from 'context/SearchResultContext';
import ReactDOM from 'react-dom/client';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <SearchResultContextProvider>
    <SearchPage />
  </SearchResultContextProvider>
);
