import ReduxStore from 'providers/store';
import Router from 'src/routes';

const App = () => {
  return (
    <ReduxStore>
      <Router />
    </ReduxStore>
  );
};

export default App;
