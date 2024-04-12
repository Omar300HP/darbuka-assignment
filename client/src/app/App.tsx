import { ReduxStore, ThemeProvider } from '../providers';
import Router from '../routes';

const App = () => {
  return (
    <ThemeProvider>
      <ReduxStore>
        <Router />
      </ReduxStore>
    </ThemeProvider>
  );
};

export default App;
