import { ThemeProvider } from 'providers/ThemeProvider';
import ReduxStore from 'providers/store';
import Router from 'src/routes';

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
